rectangleFinder = require(`./rectangle-finder.js`);

test('test', ()=>{
	expect(rectangleFinder()).toMatchSnapshot();
})