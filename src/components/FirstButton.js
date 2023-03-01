export function FirstButton({name}) {
  return (
    <div>
      <button
        type="submit"
        className="drop-shadow-xl text-white bg-gradient-to-r rounded-md px-5 py-2 m-5 
            from-blue-900 to-purple-800 hover:from-purple-800 dark:hover:from-blue-400 dark:hover:to-violet-500
            hover:to-blue-900  hover:scale-105 transition-all duration-200 active:shadow-[0px_0px_30px_-0px_rgba(145,82,245,0.6)]
            dark:to-blue-400 dark:from-violet-500  "
      >
        <span>{name}</span>
      </button>
    </div>
  );
}
