import { useState, useEffect } from 'react'

export interface Beverage {
  name: string;
  producerName: string;
  beverageName: string;
  beverageColor: string;
  beverageStyle: string;
  producerLocation: string;
  abv: number;
  ibu?: any;
  logo: string;
  level: number;
}

function useFetchData(url: string): {

    data: Beverage[]  | null;
    done:boolean
} {
    const [data, dataSet] = useState<Beverage[] | null>(null)
    const [done, doneSet] = useState(false)

    useEffect(() => {
        fetch(url).then(resp => resp.json())
        .then((d: Beverage[]) => {
            dataSet(d)
            doneSet(true)
        }).catch((err) => {
            dataSet(err)
            doneSet(false)
        });


    }, [url]);

    return {
        data,
        done,

    };
}

function CustomHooks() {

    const { data, done } = useFetchData("/hv-taplist.json");
    return ( 
    <div>
        {done && (
            <img
                src={data![3].logo}
                alt="Logo" />
        )}
    </div>
    );

}

export default CustomHooks;
