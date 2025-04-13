const Home = ({ css }: { css: (strings: TemplateStringsArray) => void }) => {
	css`
    span {
      font-size: 7rem;
      text-align: center; /* Added text-align property */
    }
  `;

	return <span>Brisa UI</span>;
};

export default Home;
