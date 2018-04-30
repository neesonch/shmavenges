const rectangleFinder = require(`./rectangle-finder.js`);
const testRectangles = require(`./test-rectangles.js`);


test('Rectangle top left', ()=>{
	expect(rectangleFinder(testRectangles.rectangleTopLeft)).toMatchSnapshot();
})

test('Rectangle top right', ()=>{
	expect(rectangleFinder(testRectangles.rectangleTopRight)).toMatchSnapshot();
})

test('Rectangle bottom left', ()=>{
	expect(rectangleFinder(testRectangles.rectangleBottomLeft)).toMatchSnapshot();
})

test('Rectangle bottom right', ()=>{
	expect(rectangleFinder(testRectangles.rectangleBottomRight)).toMatchSnapshot();
})

test('Rectangle central', ()=>{
	expect(rectangleFinder(testRectangles.rectangleCentral)).toMatchSnapshot();
})