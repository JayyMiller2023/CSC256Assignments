        let divCheckerBoard = document.getElementById("divCheckerBoard");

        let arrPieces = [
            [null, "i", null, "i", null, "i", null, "i"],
            ["i", null, "i", null, "i", null, "i", null],
            [null, "i", null, "i", null, "i", null, "i"],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            ["g", null, "g", null, "g", null, "g", null],
            [null, "g", null, "g", null, "g", null, "g"],
            ["g", null, "g", null, "g", null, "g", null]
        ] 

        for (let i=0; i<8; i++) {
            for (let j=0; j<8; j++) {
                let divCheckerSquare = document.createElement("div");

                divCheckerSquare.classList.add("checkerSquare");

                divCheckerSquare.setAttribute("id", "div" + i + j);

                if ((i+j) % 2 == 1) {
                    divCheckerSquare.classList.add("checkerSquareAlt");

                    divCheckerSquare.addEventListener("click", movePiece);
                }
                
                divCheckerBoard.appendChild(divCheckerSquare);

                if (arrPieces[i][j]){
                    createPiece("piece" + i + j, "checkerPiece-" + arrPieces[i][j], divCheckerSquare);
                }
            }
        }

        function createPiece(pieceId, pieceClass, divSquare) {

            let divPiece = document.createElement("div");

            divPiece.setAttribute("id", pieceId);

            divPiece.classList.add("checkerPiece");

            divPiece.classList.add(pieceClass);

            divPiece.addEventListener("click", storePieceId);

            divSquare.appendChild(divPiece);
        }

        function movePiece(event) {
            let spnSecret = document.getElementById("spnSecret");

            console.log("movePiece function was called");

            let newSquareId = event.target.id;

            console.log("newSquareId=" + newSquareId);

            newSquareId = newSquareId.replace("div", "").replace("piece", "");

            console.log("newSquareId=" + newSquareId);

            let selPieceId = spnSecret.dataset.value;

            console.log("selPieceId=" + selPieceId);

            if (selPieceId != "undefined" && newSquareId != selPieceId) {
                console.log("move piece!");

                let sourceDiv = document.getElementById("div" +  selPieceId);

                let selPieceDiv = document.getElementById("piece" + selPieceId);

                let selPieceColorClass = selPieceDiv.classList[1];

                sourceDiv.removeChild(selPieceDiv);

                let targetDiv = document.getElementById("div" + newSquareId);

                createPiece("piece" + newSquareId, selPieceColorClass, targetDiv);

                spnSecret.dataset.value = "";
            }
        }

        function storePieceId(event) {
            let spnSecret = document.getElementById("spnSecret");

            let selPieceId = event.target.id;

            selPieceId = selPieceId.replace("piece", "");

            console.log("[storePieceId] selPieceId=" + selPieceId);

            spnSecret.dataset.value = selPieceId;
        }