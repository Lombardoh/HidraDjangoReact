import axios from 'axios';
import React, { useState } from 'react';

export async function FetchData(){

    const url = "http://127.0.0.1:8000/api/stock_manager/";

    const response = await axios.get(url)
    return response.data     
    
}



