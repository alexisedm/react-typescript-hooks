import { useState, useEffect, useMemo } from 'react'

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

// function useFetchData(url: string): {
function useFetchData<Payload>(url: string): {

    //data: Beverage[]  | null;
    data: Payload | null;
    done:boolean
} {
    const [data, dataSet] = useState<Payload | null>(null)
    const [done, doneSet] = useState(false)

    useEffect(() => {
        fetch(url).then(resp => resp.json())
        .then((d: Payload) => {
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

    const { data, done } = useFetchData<Beverage[]>("/hv-taplist.json");

    const portlandTaps = useMemo(() =>
        (data || []).filter(bev => bev.producerLocation.includes("Portland")),
        [data])

    return (
        <div>
            {portlandTaps.length && (
                <img src={portlandTaps![0].logo} alt="Logo" />
            )}
        </div>
    );

}

export default CustomHooks;
