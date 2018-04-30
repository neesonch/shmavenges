
findRectangle = (rows) =>{
	let rectangle = {};  
	let rectangleBottom = 0;
	rows.forEach((line, row) => {
		let isPartOfTopEdge = false;
		line.forEach((item, col) => {
			if(item === 1 && !rectangle.hasOwnProperty('start')){
				rectangle.start = {row, col};
				isPartOfTopEdge = true;
			} else if (item === 1 && rectangleBottom < row){
				rectangleBottom = row;
			}
			if(isPartOfTopEdge){
				if(item === 0 ){	
					rectangle.width = col - rectangle.start.col;
					isPartOfTopEdge = false; 
				} else if (col === line.length - 1){
					rectangle.width = col + 1 - rectangle.start.col;
					isPartOfTopEdge = false; 
				}	
			}
		});
		rectangle.height = (rectangleBottom + 1 - rectangle.start.row);
	});
	return rectangle;
}

module.exports = findRectangle;