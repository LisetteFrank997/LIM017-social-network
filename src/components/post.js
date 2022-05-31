export function posts (doc, impriPost) {
    impriPost.innerHTML = "";
    doc.forEach((doc) => {
      impriPost.innerHTML += `
      <div class="postConteiner">
        
        <p class="bodyPost">${doc.data().post}</p>
        <button class="btnDelete" data-id="${doc.id}">Delete</button>
    </div>`;
    });
}