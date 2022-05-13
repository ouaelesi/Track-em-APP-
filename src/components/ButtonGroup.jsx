function ButtonGroup() {
  return (
    <div className="bg-sidebar inline-flex gap-x-8 rounded-3xl" role="group">
      <button
        type="button"
        className="ml-8 my-0.5 py-2 px-8 text-lg text-bg-text bg-transparent rounded-3xl hover:bg-white hover:text-track-blue focus:bg-white focus:text-track-blue focus:font-medium"
      >
        Burnout
      </button>
      <button
        type="button"
        className="my-0.5 py-2 px-8 text-lg text-bg-text bg-transparent rounded-3xl hover:bg-white hover:text-track-blue focus:bg-white focus:text-track-blue focus:font-medium"
      >
        Depression
      </button>
      <button
        type="button"
        className="mr-8 my-0.5 py-2 px-8 text-lg text-bg-text bg-transparent rounded-3xl hover:bg-white hover:text-track-blue focus:bg-white focus:text-track-blue focus:font-medium"
      >
        Anxiety
      </button>
    </div>
  );
}

export default ButtonGroup;
