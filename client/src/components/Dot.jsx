import "../assets/styles/slideshow.css";

export default function Dot(props) {
   let dots = [];
   for (let i = 0; i < props.numDots; i++) {
      dots.push(
         <span
            className="dot"
            key={i}
            style={i === props.currIndex ? { background: "#717171" } : {}}
            onClick={() => props.handleClick(i)}
         />
      );
   }
   return dots;
}
