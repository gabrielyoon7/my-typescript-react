export interface MyData {
  id: number;
  name: string;
}

class IndexedDBUtil {
  private dbName: string;
  private dbVersion: number;
  private db: IDBDatabase | null;

  constructor(dbName: string, dbVersion: number) {
    this.dbName = dbName;
    this.dbVersion = dbVersion;
    this.db = null;
  }

  public async open(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const request = window.indexedDB.open(this.dbName, this.dbVersion);

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        if (!db.objectStoreNames.contains('myData')) {
          db.createObjectStore('myData', {keyPath: 'id', autoIncrement: true});
        }
      };

      request.onsuccess = (event) => {
        this.db = (event.target as IDBOpenDBRequest).result;
        resolve();
      };

      request.onerror = (event) => {
        reject((event.target as IDBOpenDBRequest).error);
      };
    });
  }

  public close(): void {
    if (this.db) {
      this.db.close();
      this.db = null;
    }
  }

  public async addData(data: MyData): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      if (!this.db) {
        reject(new Error('데이터가 없습니다. open()을 호출해주세요.'));
        return;
      }

      const transaction = this.db.transaction(['myData'], 'readwrite');
      const objectStore = transaction.objectStore('myData');
      const request = objectStore.add(data);

      request.onsuccess = () => {
        console.log('데이터 저장 성공');
        this.close();
        resolve();
      };

      request.onerror = (event) => {
        const error = (event.target as IDBRequest).error;
        console.error('Error:', error);
        this.close();
        reject(error);
      };
    });
  }

}

export default IndexedDBUtil;
