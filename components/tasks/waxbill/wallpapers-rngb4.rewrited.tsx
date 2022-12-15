// must be used internationalization
import React, { useEffect, useState } from 'react';

const callApi = (url: string): void => {
    console.log('Called url:', url);
};

type Colors = {
    colors?: {
        [color: string]: number,
    }
}

const getColorsDict = (): Promise<Colors> => {
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

// used as default export because code highlighting issues, must be simple export
export default function App(): React.ReactElement {
    const [dict, setDict] = useState<Colors>({});
    const [isReady, setReady] = useState(false);

    const filterByColor = (colorName) => {
        if (dict.colors) {
            const apiUrl = `/api/?colorId=${dict.colors[colorName]}`;
            callApi(apiUrl);
        }
    };

    async function getDict() {
        // bugfix: destroy is not a function
        // https://medium.com/geekculture/react-uncaught-typeerror-destroy-is-not-a-function-192738a6e79b
        setDict(await getColorsDict());
        setReady(true);

        if (isReady) {
            filterByColor('red');
        }
    }

    useEffect( () => {
        getDict();
    }, [isReady]);

    return (
        <div className='App'>
            <p>
                Есть магазин обоев. Пользователь перешел по ссылке oboi.com/?color=red
            </p>
            <p>
                Когда страница загрузилась, нам надо сходить в API и получить обои
                красного цвета, но для этого надо знать id этого цвета.
            </p>
            <p>
                Чтобы его получить, надо сначала сходить в API за словарем
            </p>
            <p>
                На странице нет использования реальных API, всё фейковое.
            </p>
            <p>
                Нужно починить код, чтобы в консоли отобразилось &apos;/api/?colorId=1&apos;
            </p>
        </div>
    );
}
