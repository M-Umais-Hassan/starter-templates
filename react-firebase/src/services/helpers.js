import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "config";

export const uploadFile = (path, file) =>
  new Promise((resolve, reject) => {
    const uniqueKey = new Date().getUTCMilliseconds();
    const storageReference = ref(storage, `${path}/${uniqueKey}-${file.name}`);
    const task = uploadBytesResumable(storageReference, file);
    const taskProgress = () => {};
    const taskError = reject;
    const taskCompleted = async () => {
      await getDownloadURL(task.snapshot.ref).then(resolve).catch(reject);
    };
    task.on("state_changed", taskProgress, taskError, taskCompleted);
  });
