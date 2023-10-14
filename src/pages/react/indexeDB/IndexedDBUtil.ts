export interface MyData {
  id: number;
  name: string;
}
class IndexedDBUtil {
  private dbName: string;
  private dbVersion: number;
  private db: IDBDatabase | null;
  private objectStoreNames: string[];

  constructor(dbName: string, dbVersion: number, objectStoreNames: string[]) {
    this.dbName = dbName;
    this.dbVersion = dbVersion;
    this.objectStoreNames = objectStoreNames;
    this.db = null;
  }

  public async open(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const request = window.indexedDB.open(this.dbName, this.dbVersion);

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        for (const storeName of this.objectStoreNames) {
          if (!db.objectStoreNames.contains(storeName)) {
            db.createObjectStore(storeName, { keyPath: 'id', autoIncrement: true });
          }
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

  public async addData(storeName: string, data: MyData): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      if (!this.db) {
        reject(new Error('.open()이 호출되지 않았습니다.'));
        return;
      }

      const transaction = this.db.transaction([storeName], 'readwrite');
      const objectStore = transaction.objectStore(storeName);
      const request = objectStore.add(data);

      request.onsuccess = () => {
        resolve();
      };

      request.onerror = (event) => {
        const error = (event.target as IDBRequest).error;
        console.error('Error:', error);
        reject(error);
      };
    });
  }
}

export default IndexedDBUtil;
