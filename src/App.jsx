const date = new Date();

function formatdate(date) {
  return new Intl.DateTimeFormat('en-US', { weekday: 'long' } ).format(date);
}

export default function Todolist() {
  return(
    <h1>To do list for {formatdate(date)}</h1>
  )
}