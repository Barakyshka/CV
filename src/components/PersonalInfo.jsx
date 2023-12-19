function PersonalInfo() {
  return (
    <div className="w-full md:w-1/3 mt-8 md:mt-0 mx-auto flex flex-col gap-4 rounded-md">
      <div className="flex items-center">
        <img
          src="/images/geo.png"
          alt="Telegram icon"
          className="inline-block align-text-bottom"
          style={{ height: '1.5em', width: '1.5em' }}
        />
        <span className="font-bold text-lg ml-2"> Minsk, Belarus </span>
      </div>
      <div className="">
        <span className="font-bold text-lg mb-2">
          English Language Proficiency
        </span>{' '}
        <br /> B1
      </div>
      <ul className="list-disc ml-4">
        <span className="font-bold text-lg mb-2">Skills:</span>
        <li>C++</li>
        <li>JS/React</li>
        <li>C#</li>
      </ul>
      <ul className="list-disc ml-4">
        <span className="font-bold text-lg mb-2">Social Links:</span>
        <li>
          <a href="mailto:ibarakyshkai@gmail.com" className="text-blue-500">
            <img
              src="/images/em.png"
              alt="Telegram icon"
              className="inline-block align-text-bottom"
              style={{ height: '1.2em', width: '1.2em' }}
            />
            <span className="font-bold"> varakyshka@gmail.com </span>
          </a>
        </li>
        <li>
          <a href="https://t.me/barakyshka" className="text-blue-500">
            <img
              src="/images/tg.png"
              alt="Telegram icon"
              className="inline-block align-text-bottom"
              style={{ height: '1.2em', width: '1.2em' }}
            />
            <span className="font-bold"> @varakyshka </span>
          </a>
        </li>
      </ul>
      <div className="mb-4">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
        >
          Распечатать PDF
        </a>
      </div>
    </div>
  );
}

export default React.memo(PersonalInfo);
