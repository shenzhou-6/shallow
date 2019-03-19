import Qs from 'qs';

const baseUrl = 'http://localhost:8081/'

const contentType = 'application/json;charset=UTF-8'


export async function Get(url) {
    let promise;
    const requestUrl = baseUrl + url;
    const headers = new Headers({
        'Content-Type':contentType
    })
    promise = await fetch(requestUrl,{
        headers,
    })
    return handleRes(promise);
}

export async function Post(url,param) {
    let promise;
    const requestUrl = baseUrl + url;
    const headers = new Headers({
        'Content-Type':contentType
    })
    promise = await fetch(requestUrl,{
        body:Qs.stringify(param),
        headers,
        method:'POST',
    })
    return handleRes(promise);
}

const handleRes = async (res) => {
    const parsedRes = await parseRes(res);
    // 如果res.ok，则请求成功
    if (res.ok) {
        return parsedRes;
    }
    // 请求失败，返回解析之后的失败的数据
    const error = parsedRes;
    throw error;
};
const parseRes = async (res) => {
    const contentType = res.headers.get('Content-Type');
    // 判定返回的内容类型，做不同的处理
    if (contentType) {
        if (contentType.indexOf('json') > -1) {
            return await res.json();
        }
        if (contentType.indexOf('text') > -1) {
            return await res.text();
        }
        if (contentType.indexOf('form') > -1) {
            return await res.formData();
        }
        if (contentType.indexOf('video') > -1) {
            return await res.blob();
        }
    }
    return await res.text();
};
