// @ts-nocheck
/* eslint-disable */
import React, { useEffect, useState } from "react";

const callApi = (url) => {
    console.log("Called url:", url);
};

const getColorsDict = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res({
                colors: {
                    red: 1,
                    yellow: 2
                }
            });
        }, 1000);
    });
};

export default function App() {
    const [dict, setDict] = useState([]);

    const filterByColor = (colorName) => {
        const apiUrl = `/api/?colorId=${dict.colors[colorName]}`;
        callApi(apiUrl);
    };

    useEffect(async () => {
        setDict(await getColorsDict());
        filterByColor("red");
    });

    return (
        <div className="App">
            <ul>
                Есть магазин обоев. Пользователь перешел по ссылке oboi.com/?color=red
            </ul>
            <ul>
                Когда страница загрузилась, нам надо сходить в API и получить обои
                красного цвета, но для этого надо знать id этого цвета.
            </ul>
            <ul>Чтобы его получить, надо сначала сходить в API за словарем</ul>
            <ul>На странице нет использования реальных API, всё фейковое.</ul>
            <ul>
                Нужно починить код, чтобы в консоли отобразилось "/api/?colorId=1"
            </ul>
        </div>
    );
}
