export default function Home() {
  return (
    <>
      <header style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <img src="https://images.nasa.gov/images/nasa_logo-large.png?as=webp" ></img>
        <h1 style={{ color: "white" }}>NASA Image and Video Library</h1>
      </header>
      <main>
        <form style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "10px", marginTop: "30px" }}>
          <label for="searchbar" style={{ color: "white", fontSize: "20px" }}>Please Searching Here</label>
          <input type="text" id="searchbar" name="searchbar" placeholder="Search for ... (e.g. &quot;Orion&quot;)" style={{ fontSize: "25px" , color: "white", width: "500px", borderRadius: "10px", borderColor: "black"}}></input>
        </form>
      </main>
    </>
  )
}