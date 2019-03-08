import axios from 'axios';
import {
  CLOUDINARY_UPLOAD_URL,
  CLOUDINARY_UPLOAD_PRESET
} from '../constants';


const imageUpload = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
  try {
    const response = await axios({
      url: CLOUDINARY_UPLOAD_URL,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: formData
    });
    return response;
  } catch (error) {
    return error.message;
  }
};
export default imageUpload;
