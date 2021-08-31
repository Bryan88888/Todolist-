
export default function Form({ handleAdd, handleInput }) {
  return (
    <div>
      <input
        type='text'
        onChange={handleInput}
      />
      <button onClick={() => handleAdd()}> submit </button>
    </div>
  );
}
