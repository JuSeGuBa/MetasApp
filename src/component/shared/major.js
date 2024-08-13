function Major({ Children }) {
  return (
    <>
      <sidernav>
        <a href="/lista">Lista</a>
        <a href="/crear">Crear</a>
      </sidernav>
      <main>{Children}</main>
    </>
  );
}

export default Major;
