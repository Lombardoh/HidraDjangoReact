

export async function FetchData(){
    const url = "http://127.0.0.1:8000/api/stock_manager/";
    const response = await fetch(url);
    const data = await response.json();
    return data
}



