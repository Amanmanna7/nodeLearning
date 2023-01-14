// Buffer is like a array but not resize;

// const buf= Buffer.from('Hy','utf-8');

// console.log(buf);

// console.log(buf[0]);
// console.log(buf[1]);

// const buf=Buffer.alloc(4);
// buf.write("Hello How are you")
// // console.log(buf.toString());
// buf[0]=108;
// console.log(buf.toJSON());
// console.log(buf.toString());

// const buff=Buffer.from([72, 101, 108, 258]);
// console.log(buff.toString());

// https://www.google.com/search?q=%E4%BD%A0&rlz=1C1RXQR

const buff=Buffer.from('E4BDA0','hex');
console.log(buff.toString());

