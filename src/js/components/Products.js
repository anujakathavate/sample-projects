import React from "react";
import Modal from "./Modal";

var Products = ({id}) => {
	return (
		<Modal size="full" animIn="slide-in-right" animOut="slide-out-right" id={id}>
            <h3>Products</h3>
            <p>
				Get Affordable website designed by us.
				Get Business websites designed by us.
				Get professional websites designed by us.
				Get good looking blogs designed by us.
			</p>
        </Modal>
	);
}

export default Products;
