import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useEffect, useState } from 'react';

import AxiosRequest from '../utils/AxiosRequest';
import { Box } from '@mui/material';
const Search = ({ closeEvent }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        productAll();
    }, []);

    const productAll = async () => {
        await AxiosRequest.get('apiproduct/search').then((res) => setData(res.data));
    };
    const submit = (e) => {
        console.log(e);
    };
    return (
        <Autocomplete
            id="country-select-demo"
            sx={{ width: 300, fontSize: 17, background: 'white', position: 'absolute', marginTop: -6 }}
            options={data}
            autoHighlight
            getOptionLabel={(option) => option.title}
            renderOption={(props, option) => (
                <Box component="li" sx={{ height: 80, fontSize: 16 }} {...props}>
                    <img width="50" src={`/images/${option.avatar}`} />
                    {option.title}
                </Box>
            )}
            renderInput={(params, option) => (
                <TextField
                    {...params}
                    label="Choose a Product"
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password',
                    }}
                    onSubmit={submit(option)}
                />
            )}
        />
    );
};

export default Search;
