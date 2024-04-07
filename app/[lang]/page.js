
import Movies from "@/components/Movies";


export default function Home({params:{lang}}) {
  return (
    <div>
      <Movies lang={lang}/>
    </div>
  );
}
