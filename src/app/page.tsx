import { TabelaStudend } from "@/components/TabelaStudend";
import { students } from "@/data/students";

function Page () {
  return(
    <div className="container mx-auto">
      <TabelaStudend students={students}></TabelaStudend>      
    </div>
  )
}

export default Page;