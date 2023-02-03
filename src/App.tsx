import axios from 'axios';
import { useEffect, useState } from 'react';
import * as Style from './App.styles'
import AmiiboApi from './AmiiboApi.json'
import { AmiiboType } from './types/AmiiboType';

function App() {
  const AmiiboApi = require('./AmiiboApi.json')  

  const [amiibos, setAmiibos] = useState<AmiiboType[]>([])
  const [findAmiibo, setFindAmiibo] = useState<AmiiboType[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getAmiibos()
  })
  
  const getAmiibos = async() => {
    // await axios.get('https://amiiboapi.com/api/amiibo/?amiiboSeries=Super%20Smash%20Bros.')
    // await axios.get('./AmiiboApi.json')
    //   .then(response => {
    //     setAmiibos(JSON.parse(response.data))
    //     setFindAmiibo(response.data)
    //   })
    //   .catch(err => console.log(`Erro: ${err}`))
    setLoading(true)

    await setAmiibos(AmiiboApi.amiibo)
    await setFindAmiibo(AmiiboApi.amiibo)

    setLoading(false)
  }


  return (
    <Style.Container>
      <Style.Header>
      Projeto com API Amiibo
      </Style.Header>

      <Style.Main>
        <>
          { !loading && <h1>Carregando</h1> }

          {
            amiibos.map((el, index) => (
                <Style.Card>
                  <Style.Img src={ el.image } />
                  <Style.Name>{ el.name }</Style.Name>
                </Style.Card>
              ))
          }
        </>
      </Style.Main>
    </Style.Container>
  );
}

export default App;
