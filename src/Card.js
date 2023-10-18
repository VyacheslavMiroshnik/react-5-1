import React from 'react';

export default function Card({ img, title, text, button }) {
  return (
    <div class='card' style={{ width: '18rem' }}>
      {img && <img src={img} class='card-img-top' alt={title} />}

      <div class='card-body'>
        <h5 class='card-title'>{title}</h5>
        <p class='card-text'>{text}</p>
        <a href='#' class='btn btn-primary'>
          {button}
        </a>
      </div>
    </div>
  );
}

{
  /*   
  <div class="card" style={{width: '18rem'}}>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div> */
}
