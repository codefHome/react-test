import "./App.css";
import { Box, CircularProgress } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import House from "./components/House";
interface itemsType{
  houseColours:string;
  commonRoom:string;
  animal:string;
  founder:string;
}
function App() {
  const { isLoading, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      axios
        .get(" https://wizard-world-api.herokuapp.com/houses")
        .then((res) => res.data),
  });

  if (isLoading) {
    return (
      <Box>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <Box sx={{
        display:'flex',
        flexDirection:'column',
        gap:'20px',
      }}>
        {data?.map((item:itemsType) => (
          <House
            color1={CSS.supports('color', `${item?.houseColours?.split(' ')[0]}`) ? item?.houseColours?.split(' ')[0] : 'white'}
            color2={CSS.supports('color', `${item?.houseColours?.split(' ')[2]}`) ? item?.houseColours?.split(' ')[2] : 'black'}
            roomName={item?.commonRoom}
            animal={item?.animal}
            founder={item?.founder}
          />
        ))}
      </Box>
    </>
  );
}

export default App;
