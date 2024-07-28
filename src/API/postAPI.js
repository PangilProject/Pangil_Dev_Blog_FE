import axios from "axios";

// 데이터 가져오기 함수
export const getPostData = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_URL}`);
        console.log("[success] getPostData()");
        return response.data;
    } catch (error) {
        console.log("[get error] getPostData()");
    }
};

// 데이터 추가 함수
export const postPostData = async (newPost) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_URL}`, newPost);
        console.log("[success] postPostData()");
    } catch (error) {
        console.log("[post error] postPostData()");
    }
};


// 데이터 가져오기 함수
export const getPostDataOne = async (id) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_URL}/${id}`);
        console.log("[success] getPostDataOne()");
        return response.data;
    } catch (error) {
        console.log("[get error] getPostDataOne()");
    }
};
