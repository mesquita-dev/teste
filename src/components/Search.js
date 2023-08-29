import React, { useState } from 'react';
import { Link } from 'gatsby';
import { useSearchParams } from 'react-router-dom';

const Search = () => {
  const [comment, setComment] = useState('')
  const [searchParams, setSearchParams] = useSearchParams();
  const scoreParam = searchParams.get('score');
  const keyParam = searchParams.get('key');

  const handlesubmit = (e) => {
    alert('teste')
  }

  return (
    <div className="max-w-[544px] flex flex-col py-6 p-3 h-full">
      <p className="p-6 bg-gray-50 rounded-full border-2 border-gray-400 text-4xl font-medium text-gray-400 block mx-auto mb-4">
        {scoreParam}
      </p>
      <h2 className="text-zinc-800 text-base sm:text-lg font-bold sm:font-semibold mb-2">
        Olá {keyParam}, essa foi a sua nota na nossa pesquisa, gostaríamos de
        saber se tem algum comentário ou observação a fazer.
      </h2>

      <form
        action=""
        onSubmit={(e) => handlesubmit(e)}
        className="flex flex-col"
      >
        <input
          type="search"
          name="comment"
          id="comment"
          autoComplete="off"
          placeholder="Digite aqui sua experiência"
          className="pt-4 pb-32 pl-4 rounded-lg bg-netral-50 border border-stone-300 outline-0 mb-4"
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          className="py-4 px-6 bg-[#4510a3] text-white rounded-md max-w-fit mx-auto mb-4"
          type="submit"
        >
          Enviar feedback
        </button>
        {scoreParam >= 9 ? (
          <Link
            className="py-4 px-6 bg-gray-200 text-black rounded-md max-w-fit mx-auto mb-6"
            id=""
            to="https://g.page/r/CdUtWWiBriboEAI/review"
            target="_blank"
          >
            Quero enviar feedback para o Google também
          </Link>
        ) : null}
        <p className="text-center">
          Você também pode ver nossos conteúdos{' '}
          <a
            href="https://grantoseguros.com/blog"
            target="_blank"
            className="text-[#4510a3]"
          >
            clicando aqui nesse link
          </a>
        </p>
      </form>
    </div>
  );
};

export default Search;
