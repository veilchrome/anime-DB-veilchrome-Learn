import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: 'Inter', sans-serif;
    }

    body{
   <ul class="background">
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   </ul>

   @keyframes cube {
    from {
        transform: scale(0) rotate(0deg) translate(-50%, -50%);
        opacity: 1;
    }
    to {
        transform: scale(20) rotate(960deg) translate(-50%, -50%);
        opacity: 0;
    }
}

.background {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    background: #0136c0;
    overflow: hidden;
}
.background li {
    position: absolute;
    top: 80vh;
    left: 45vw;
    width: 10px;
    height: 10px;
    border: solid 1px #0030ac;
    color: transparent;
    transform-origin: top left;
    transform: scale(0) rotate(0deg) translate(-50%, -50%);
    animation: cube 13s ease-in forwards infinite;
}
undefined
.background li:nth-child(0) {
    animation-delay: 0s;
    left: 92vw;
    top: 87vh;
}

.background li:nth-child(1) {
    animation-delay: 2s;
    left: 17vw;
    top: 18vh;
}

.background li:nth-child(2) {
    animation-delay: 4s;
    left: 5vw;
    top: 32vh;
}

.background li:nth-child(3) {
    animation-delay: 6s;
    left: 90vw;
    top: 29vh;
    border-color: #013bd3;
}

.background li:nth-child(4) {
    animation-delay: 8s;
    left: 48vw;
    top: 89vh;
    border-color: #013bd3;
}

.background li:nth-child(5) {
    animation-delay: 10s;
    left: 73vw;
    top: 13vh;
}

.background li:nth-child(6) {
    animation-delay: 12s;
    left: 50vw;
    top: 36vh;
    border-color: #013bd3;
}

.background li:nth-child(7) {
    animation-delay: 14s;
    left: 25vw;
    top: 54vh;
    border-color: #013bd3;
}

.background li:nth-child(8) {
    animation-delay: 16s;
    left: 6vw;
    top: 80vh;
}

.background li:nth-child(9) {
    animation-delay: 18s;
    left: 28vw;
    top: 97vh;
}

.background li:nth-child(10) {
    animation-delay: 20s;
    left: 54vw;
    top: 52vh;
    border-color: #013bd3;
}

.background li:nth-child(11) {
    animation-delay: 22s;
    left: 60vw;
    top: 91vh;
}

.background li:nth-child(12) {
    animation-delay: 24s;
    left: 83vw;
    top: 74vh;
    border-color: #013bd3;
}

.background li:nth-child(13) {
    animation-delay: 26s;
    left: 29vw;
    top: 59vh;
}

.background li:nth-child(14) {
    animation-delay: 28s;
    left: 34vw;
    top: 28vh;
}

.background li:nth-child(15) {
    animation-delay: 30s;
    left: 82vw;
    top: 47vh;
    border-color: #013bd3;
}

.background li:nth-child(16) {
    animation-delay: 32s;
    left: 22vw;
    top: 70vh;
}

.background li:nth-child(17) {
    animation-delay: 34s;
    left: 98vw;
    top: 70vh;
    border-color: #013bd3;
}

.background li:nth-child(18) {
    animation-delay: 36s;
    left: 12vw;
    top: 94vh;
}

.background li:nth-child(19) {
    animation-delay: 38s;
    left: 78vw;
    top: 63vh;
    border-color: #013bd3;
}

.background li:nth-child(20) {
    animation-delay: 40s;
    left: 10vw;
    top: 15vh;
}

.background li:nth-child(21) {
    animation-delay: 42s;
    left: 75vw;
    top: 43vh;
    border-color: #013bd3;
}

.background li:nth-child(22) {
    animation-delay: 44s;
    left: 62vw;
    top: 9vh;
    border-color: #013bd3;
}

.background li:nth-child(23) {
    animation-delay: 46s;
    left: 36vw;
    top: 66vh;
}

.background li:nth-child(24) {
    animation-delay: 48s;
    left: 43vw;
    top: 39vh;
    border-color: #013bd3;
}

.background li:nth-child(25) {
    animation-delay: 50s;
    left: 67vw;
    top: 57vh;
}

.background li:nth-child(26) {
    animation-delay: 52s;
    left: 95vw;
    top: 3vh;
    border-color: #013bd3;
}

.background li:nth-child(27) {
    animation-delay: 54s;
    left: 85vw;
    top: 2vh;
}

.background li:nth-child(28) {
    animation-delay: 56s;
    left: 58vw;
    top: 25vh;
    border-color: #013bd3;
}

.background li:nth-child(29) {
    animation-delay: 58s;
    left: 46vw;
    top: 45vh;
}

.background li:nth-child(30) {
    animation-delay: 60s;
    left: 1vw;
    top: 78vh;
    border-color: #013bd3;
}

.background li:nth-child(31) {
    animation-delay: 62s;
    left: 39vw;
    top: 21vh;
}

.background li:nth-child(32) {
    animation-delay: 64s;
    left: 66vw;
    top: 83vh;
    border-color: #013bd3;
}

.background li:nth-child(33) {
    animation-delay: 66s;
    left: 19vw;
    top: 6vh;
    border-color: #013bd3;
}

        color: #6c7983;
        font-size: 1.2rem;
        &::-webkit-scrollbar{
            width: 7px;
        }
        &::-webkit-scrollbar-thumb{
            background-color: #27AE60;
            border-radius: 10px;
        }
        &::-webkit-scrollbar-track{
            background-color: #EDEDED;
        }
    }
`;

export default GlobalStyle;
