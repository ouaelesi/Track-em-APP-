import ButtonGroup from "../components/ButtonGroup";

function Recommendations() {
  return (
    <div className="mt-4">
      <div className="flex justify-center">
        <ButtonGroup />
      </div>
      <p className="mt-4 mb-16 ml-2">
        For Depression cases, we recommend the following treatments:
      </p>
      <div className="flex flex-col gap-y-2 items-start mt-4">
        <p className="text-xl bg-track-red px-2 py-2 text-white font-medium rounded-3xl shadow-xl">
          Critique cases
        </p>
        <p className="text-lg">
          We recommend that you take them to visit psychologues, work on their
          social problems and give them 2-3 days rest
        </p>
      </div>
      <div className="flex flex-col gap-y-2 items-start mt-4">
        <p className="text-xl bg-track-orange px-2 py-2 text-white font-medium rounded-3xl shadow-xl">
          Cases to watch
        </p>
        <p className="text-lg">
          We recommend that you take them to visit psychologues, work on their
          social problems and give them 2-3 days rest
        </p>
      </div>
      <div className="flex flex-col gap-y-2 items-start mt-4">
        <p className="text-xl bg-track-green px-2 py-2 text-white font-medium rounded-3xl shadow-xl">
          Acceptable cases
        </p>
        <p className="text-lg">
          We recommend that you take them to visit psychologues, work on their
          social problems and give them 2-3 days rest
        </p>
      </div>
    </div>
  );
}

export default Recommendations;
