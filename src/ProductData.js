import './App.css';
import bluehoodie from "./images/bluehoodie.jpg"
import hat from "./images/hat.jpg"
import pinkt from "./images/justculture.jpg"
import longsleeve from "./images/longsleeve.jpg"
import outcastt from "./images/outcast.jpg"
import sunhat from "./images/sunhat.jpg"
import whitehoodie from "./images/whitehoodie.jpg"

const data = {
    products: [
        {
            id:'1',
            src: pinkt,
            title: 'Just Culture Pink t-shirt',
            price: 19,
            quantity: 0,
        },
        {
            id:'2',
            src: longsleeve,
            title: 'Black Long-sleeve shirt',
            price: 24,
            quantity: 0,
        },
        {
            id:'3',
            src: outcastt,
            title: 'Outcast t-shirt',
            price: 24,
            quantity: 0,
        },
        {
            id:'4',
            src: bluehoodie,
            title: 'Blue Hoodie',
            price: 39,
            quantity: 0,
        },
        {
            id:'5',
            src: whitehoodie,
            title: 'White Hoodie',
            price: 39,
            quantity: 0,
        },
        {
            id:'6',
            src: hat,
            title: 'Light-gray Cap',
            price: 9,
            quantity: 0,
        },
        {
            id:'7',
            src: sunhat,
            title: 'Sun hat',
            price: 14,
            quantity: 0,
        },
    ]
}
export default data;
