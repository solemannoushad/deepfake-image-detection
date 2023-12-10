import fs from 'fs';
import { PythonShell } from 'python-shell';

// Define the directory to save the uploaded images
const uploadDir = './uploads/';

// Create the uploads directory if it doesn't exist
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

export const imgController = async (req, res) => {
  const imageBuffer = req.file.buffer;

  // Save the image to the uploads directory with a unique filename
  const fileName = Date.now() + '_' + req.file.originalname;
  const filePath = uploadDir + fileName;

  fs.writeFile(filePath, imageBuffer, (err) => {
    if (err) {
      console.error('Error saving the uploaded image:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    // Continue with the image processing or any other logic

    // Example: sending the image path to a Python server for processing
    const options = {
      mode: 'text',
      scriptPath: 'C:\\Users\\solem\\Desktop\\DIP\\deepfake\\server\\python', // Double backslashes for Windows path
      args: [filePath],
    };

    PythonShell.run('python.py', options, (pythonErr, results) => {
      if (pythonErr) {
        console.error('Error during Python script execution:', pythonErr);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      else{
        console.log("object")
      }

      console.log('Python script results:', results);
      res.json({ message: 'Image uploaded, saved, and processed successfully.' });
    });
  });
};
