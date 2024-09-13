const { Storage } = require("@google-cloud/storage");

const uploadFile = async (fileName) => {
  const storage = new Storage({
    keyFilename: `./teak-clarity-435219-f5-2976d0d399e9.json`,
  });

  const bucketName = "iclr_imagen";
  const folderName = "john";
  const bucket = storage.bucket(bucketName);

  try {
    await bucket.upload(fileName, { destination: `${folderName}/${fileName}` });
    console.log(`Upload success: ${fileName}`);
  } catch (err) {
    console.error(`Error uploading: ${fileName}`, err.message);
  }
};

const main = async () => {
  for (let i = 1; i <= 50; i++) {
    await uploadFile(`bucket_${String(i).padStart(6, "0")}.tar`);
  }
};
main().catch(console.error);
