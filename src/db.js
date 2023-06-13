import Dexie from "dexie";
import { useLiveQuery } from "dexie-react-hooks";

const db = new Dexie("ghwPasswords");
db.version(1).stores({
  passwords: "++id, website, password",
});

export const addPassword = async (website, password) => {
  try {
    const createdOn = new Date().toISOString();
    const existingEntry = await db.passwords.get({ website });
    if (existingEntry) {
      await db.passwords.update(existingEntry.id, { password, createdOn });
    } else {
      await db.passwords.add({ website, password, createdOn });
    }
  } catch (error) {
    console.error("Error saving to DB: ", error);
  }
};

export const usePasswords = () => useLiveQuery(() => db.passwords.toArray());

export default db;
