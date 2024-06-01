import Card from "./components/Card";

export default function App() {
  return (
    <main className="bg-yellow flex h-screen flex-col items-center justify-center">
      <Card
        imageUrl={"./images/illustration-article.svg"}
        category={"Learning"}
        date={"21 Dec 2023"}
        title={"HTML & CSS foundations"}
        preview={
          "These languages are the backbone of every website, defining structure, content, and presentation."
        }
        userPicUrl={"./images/image-avatar.webp"}
        userName={"Greg Hooper"}
      />
    </main>
  );
}
