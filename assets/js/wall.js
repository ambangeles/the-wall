const addModal = document.querySelector(".add-modal");
const addTrigger = document.querySelector(".add-trigger");
const closeButton = document.querySelectorAll(".close-button");
const cancelButton = document.querySelectorAll(".cancel-button");
const addForm = document.querySelector(".add-form");
const messageCount = document.getElementById("message-count");
const posts = document.querySelector(".posts");
const delModal = document.querySelector(".delete-message-modal");
const deleteButton = document.querySelectorAll(".delete-button");
const delComModal = document.querySelector(".delete-comment-modal");
const empty = document.querySelector(".no-posts");

let countMessage = 0;
let deleteMessageDiv;
let editMessageValue;
let deleteCommentDiv;
let editCommentValue;

//show add modal
addTrigger.addEventListener("click", () => {
	addModal.classList.toggle("show-modal");
	addForm.reset();
});

//close add modal
closeButton[0].addEventListener("click", () => {
	addModal.classList.toggle("show-modal");
	addForm.reset();
});

cancelButton[0].addEventListener("click", () => {
	addModal.classList.toggle("show-modal");
	addForm.reset();
});

closeButton[1].addEventListener("click", () => {
	delModal.classList.toggle("show-modal");
});

cancelButton[1].addEventListener("click", () => {
	delModal.classList.toggle("show-modal");
});

closeButton[2].addEventListener("click", () => {
	delComModal.classList.toggle("show-modal");
});

cancelButton[2].addEventListener("click", () => {
	delComModal.classList.toggle("show-modal");
});

//close when clicked outside the modal
window.addEventListener("click", (e) => {
	if (e.target === addModal) {
		addModal.classList.toggle("show-modal");
	} else if (e.target === delModal) {
		delModal.classList.toggle("show-modal");
	}
});

//disable button if there no content in the form
function isDisabled() {
	let submitButton = document.querySelector(".submit-button");
	if (document.getElementById("message").value === "") {
		submitButton.disabled = true;
		submitButton.classList.add("disabled");
	} else {
		submitButton.disabled = false;
		submitButton.classList.remove("disabled");
	}
}

addForm.addEventListener("submit", (e) => {
	e.preventDefault();
	countMessage += 1;
	messageCount.innerText = countMessage;
	empty.style.display = "none";

	let divPost = document.createElement("div");
	divPost.classList.add("post");

	let messageContent = document.createElement("textarea");
	messageContent.classList.add("message");
	messageContent.setAttribute("disabled", "");
	messageContent.setAttribute("id", "message-textarea");
	messageContent.innerText = e.target.message.value;
	divPost.appendChild(messageContent);

	//Edit message
	messageContent.addEventListener("keyup", (e) => {
		if (e.target.value === "") {
			updateButton.disabled = true;
			updateButton.classList.add("disabled");
		} else {
			updateButton.disabled = false;
			updateButton.classList.remove("disabled");
		}
	});

	let cancelButton = document.createElement("button");
	let updateButton = document.createElement("button");
	let buttons = document.createElement("div");
	buttons.classList.add("update-buttons");
	cancelButton.classList.add("update-cancel-button");
	updateButton.classList.add("update-button");
	cancelButton.innerText = "Cancel";
	updateButton.innerText = "Update Message";
	buttons.appendChild(cancelButton);
	buttons.appendChild(updateButton);

	cancelButton.addEventListener("click", (e) => {
		let textarea = e.target.parentNode.previousSibling.previousSibling;
		textarea.value = editMessageValue;
		ul.style.display = "flex";
		buttons.style.display = "none";
		textarea.setAttribute("disabled", "");
	});

	updateButton.addEventListener("click", (e) => {
		let textarea = e.target.parentNode.previousSibling.previousSibling;
		ul.style.display = "flex";
		buttons.style.display = "none";
		textarea.setAttribute("disabled", "");
	});

	//Add comment
	let commentsContainer = document.createElement("div");
	let createComment = document.createElement("div");
	let commentTextArea = document.createElement("textarea");
	let commentButton = document.createElement("button");
	let comments = document.createElement("div");

	commentTextArea.classList.add("comment-textarea");
	commentButton.classList.add("post-comment-button");
	commentButton.innerText = "Post Comment";
	commentButton.setAttribute("disabled", "");

	createComment.appendChild(commentTextArea);
	createComment.appendChild(commentButton);
	createComment.appendChild(comments);

	createComment.classList.add("post");
	commentsContainer.classList.add("show-comment");

	commentTextArea.addEventListener("keyup", (e) => {
		if (e.target.value === "") {
			commentButton.disabled = true;
			commentButton.classList.add("disabled");
		} else {
			commentButton.disabled = false;
			commentButton.classList.remove("disabled");
		}
	});

	//Post comment
	commentButton.addEventListener("click", () => {
		let commentPost = document.createElement("div");
		commentPost.setAttribute("id", "comment-post");

		let commentMessage = document.createElement("textarea");
		commentMessage.setAttribute("disabled", "");
		commentMessage.classList.add("message");

		commentPost.classList.add("post");
		commentMessage.innerHTML = commentTextArea.value;

		let cancelButton = document.createElement("button");
		let updateButton = document.createElement("button");
		let buttons = document.createElement("div");
		buttons.classList.add("update-buttons");
		cancelButton.classList.add("update-cancel-button");
		updateButton.classList.add("update-button");
		cancelButton.innerText = "Cancel";
		updateButton.innerText = "Update Message";
		buttons.appendChild(cancelButton);
		buttons.appendChild(updateButton);

		cancelButton.addEventListener("click", (e) => {
			let textarea = e.target.parentNode.previousSibling.previousSibling;
			console.log(textarea);
			textarea.value = editCommentValue;
			ul.style.display = "flex";
			buttons.style.display = "none";
			textarea.setAttribute("disabled", "");
		});

		updateButton.addEventListener("click", (e) => {
			let textarea = e.target.parentNode.previousSibling.previousSibling;
			console.log(textarea);
			ul.style.display = "flex";
			buttons.style.display = "none";
			textarea.setAttribute("disabled", "");
		});

		const attrs = [
			{ src: "../assets/images/pencil-write.png", alt: "Edit Icon", text: "Edit" },
			{ src: "../assets/images/delete.png", alt: "Delete Icon", text: "Delete" },
			{ src: "../assets/images/User Placeholder.png", alt: "User Icon", text: "You - Few seconds ago" },
		];

		let ul = document.createElement("ul");
		//For comments
		for (const attr of attrs) {
			let img = document.createElement("img");
			let span = document.createElement("span");
			let li = document.createElement("li");

			if (attr.alt === "Delete Icon") {
				//delete modal
				li.addEventListener("click", (e) => {
					deleteCommentDiv = e.target.parentNode.parentNode.parentNode.parentNode;
					console.log(deleteCommentDiv);
					delComModal.classList.toggle("show-modal");
				});
			} else if (attr.alt === "Edit Icon") {
				span.classList.add("blue");
				li.addEventListener("click", (e) => {
					let textarea = e.target.parentNode.parentNode.previousSibling;
					editCommentValue = textarea.value;
					let ul = e.target.parentNode.parentNode;
					if (textarea.getAttribute("disabled") === "") {
						textarea.removeAttribute("disabled");
						ul.style.display = "none";
						buttons.style.display = "block";
					} else {
						textarea.setAttribute("disabled", "");
					}
				});
			}

			img.setAttribute("src", attr.src);
			img.setAttribute("alt", attr.alt);
			span.innerText = attr.text;
			li.appendChild(img);
			li.appendChild(span);
			ul.appendChild(li);
		}
		commentPost.appendChild(commentMessage);
		commentPost.appendChild(ul);
		commentPost.appendChild(buttons);
		comments.prepend(commentPost);
		document.getElementById("comment-icon").setAttribute("src", "../assets/images/messages-bubble-square-text-blue.png");
		const countComment = document.getElementById("count-comment");
		let count = parseInt(countComment.getAttribute("data-count"));
		count += 1;
		countComment.setAttribute("data-count", `${count}`);
		countComment.innerText = count + " Comment";
		countComment.style.color = "#2C6BFF";
		commentTextArea.value = "";
	});

	let ul = document.createElement("ul");
	const attrs = [
		{ src: "../assets/images/messages-bubble-square-text.png", alt: "Comment Icon", text: "0 Comment" },
		{ src: "../assets/images/pencil-write.png", alt: "Edit Icon", text: "Edit" },
		{ src: "../assets/images/delete.png", alt: "Delete Icon", text: "Delete" },
		{ src: "../assets/images/User Placeholder.png", alt: "User Icon", text: "You - Few seconds ago" },
	];
	//For message
	for (const attr of attrs) {
		let img = document.createElement("img");
		img.setAttribute("id", "comment-icon");
		let span = document.createElement("span");
		let li = document.createElement("li");

		if (attr.alt === "Delete Icon") {
			//delete modal
			li.addEventListener("click", (e) => {
				deleteMessageDiv = e.target.parentNode.parentNode.parentNode;
				delModal.classList.toggle("show-modal");
			});
		} else if (attr.alt === "Edit Icon") {
			span.classList.add("blue");
			li.addEventListener("click", (e) => {
				let textarea = e.target.parentNode.parentNode.previousSibling;
				editMessageValue = textarea.value;
				let ul = e.target.parentNode.parentNode;
				if (textarea.getAttribute("disabled") === "") {
					textarea.removeAttribute("disabled");
					ul.style.display = "none";
					buttons.style.display = "block";
				} else {
					textarea.setAttribute("disabled", "");
				}
			});
		} else if (attr.alt === "Comment Icon") {
			span.setAttribute("id", "count-comment");
			span.setAttribute("data-count", "0");

			li.addEventListener("click", (e) => {
				commentsContainer.classList.toggle("show-comment");
			});
		}

		img.setAttribute("src", attr.src);
		img.setAttribute("alt", attr.alt);
		span.innerText = attr.text;
		li.appendChild(img);
		li.appendChild(span);
		ul.appendChild(li);
		commentsContainer.appendChild(createComment);
		commentsContainer.appendChild(comments);
	}

	divPost.appendChild(ul);
	divPost.appendChild(buttons);
	divPost.appendChild(commentsContainer);
	posts.prepend(divPost);
	addForm.reset();
	addModal.classList.toggle("show-modal");
});

deleteButton[0].addEventListener("click", (e) => {
	posts.removeChild(deleteMessageDiv);
	countMessage -= 1;
	if (countMessage == 0) {
		empty.style.display = "flex";
	}
	messageCount.innerText = countMessage;
	delModal.classList.toggle("show-modal");
});

deleteButton[1].addEventListener("click", (e) => {
	document.getElementById("comment-post").remove(deleteCommentDiv);
	const countComment = document.getElementById("count-comment");
	let count = parseInt(countComment.getAttribute("data-count"));
	count -= 1;
	countComment.setAttribute("data-count", `${count}`);
	if (count > 0) {
		document.getElementById("count-comment").style.color = "#2C6BFF";
	} else {
		document.getElementById("count-comment").style.color = "#707070";
		document.getElementById("comment-icon").setAttribute("src", "../assets/images/messages-bubble-square-text.png");
	}
	countComment.innerText = count + " Comment";
	delComModal.classList.toggle("show-modal");
});
