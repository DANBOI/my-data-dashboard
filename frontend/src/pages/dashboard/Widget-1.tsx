import Widget from "@/components/WidgetContainer";
import { useGetKpisQuery } from "@/services/kpiApi";

export default function Widget1() {
  const { data, error, isLoading } = useGetKpisQuery();
  console.log("🚀 ~ file: Widget-1.tsx:6 ~ Widget1 ~ data:", data);

  return (
    <Widget gridArea="Widget-1" title="abc" subtitle="abc" sideText="abc">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>Widget-1:{data[0].id}</h3>
        </>
      ) : null}
    </Widget>
  );
}
