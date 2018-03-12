
import axios from 'axios';

export async function postSubmitCode(code) {
  try {
    const url = '/en-code/v1/api/gcc';
    let res = await axios.post(url, {});
    return res.data;
  } catch (e) {
    throw e;
  }
}

export async function postGetUrl(code) {
  try {
    const url = '/en-code/v1/api/code_store';
    let res = await axios.post(url, {});
    return res.data;
  } catch (e) {
    throw e;
  }
}

