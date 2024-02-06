export function GetAsyncDataAfter15Seconds(): Promise<string> {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("Apple")
        }, 15000)
    })
}


interface FactResponse {
    fact: string,
    legth: number
}

export function getCatFact(): Promise<FactResponse>{
    return fetch("https://catfact.ninja/fact")
    .then(x=>x.json())
    .then((x:FactResponse)=>{
        return x;
    })
}