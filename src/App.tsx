import React, { useState } from 'react';
import { Button, Input, List } from 'antd-mobile';

const arr: number[][] = [
    [1,3,6,10,19,21,63,65,69,74],
    [6,13,22,26,35,41,46,64,66,80],
    [5,8,18,37,38,43,57,59,67,72],
    [9,12,20,23,40,42,54,58,60,75],
    [8,16,26,28,29,58,62,68,76,78],
];

const money: {[key: number]: number} = {
    0:2,
    5:3,
    6:5,
    7:80,
    8:800,
    9:8000,
    10:5000000
};

interface Result {
    [key: number]: {
        matchCount: number;
        money: number;
    };
}

function matchAndReturnMoney(arr: number[][], target: number[], money: {[key: number]: number}): Result {
    const result: Result = {};
    arr.forEach((subArr, index) => {
        const matchedNumbers = subArr.filter(num => target.includes(num));
        result[index] = {
            matchCount: matchedNumbers.length,
            money: money[matchedNumbers.length] || 0
        };
    });
    return result;
}

const ResultComponent: React.FC<{result: Result}> = ({result}) => {
    return (
        <List header={'匹配结果'}>
            {Object.keys(result).map((key) => (
                <List.Item key={key}>
                    组 {parseInt(key) + 1}: 个数 - {result[parseInt(key)].matchCount}, 金额 - {result[parseInt(key)].money}
                </List.Item>
            ))}
        </List>
    );
}

const App: React.FC = () => {
    const [target, setTarget] = useState<string>('');
    const [result, setResult] = useState<Result>({});

    const handleMatch = () => {
        const targetArray = target.split(' ').map(Number);
        setResult(matchAndReturnMoney(arr, targetArray, money));
    };

    return (
        <div>
            <Input
                value={target}
                onChange={(value) => setTarget(value)}
                placeholder="输入号码、空格分割"
            />
            <Button color="danger" onClick={handleMatch}>中啦！</Button>
            <ResultComponent result={result} />
        </div>
    );
}

export default App;
