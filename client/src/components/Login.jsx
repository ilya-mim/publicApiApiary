import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const Login = ({
    onSubmit,
    onChange,
    errors,
    user
}) => (
        <Card>
            <CardContent>
                    <Typography gutterBottom variant="headline" component="h3">
                        Login
                    </Typography>

                    <form action="/" onSubmit={onSubmit} className='login'>

                        {errors.summary && <div className="error-message">{errors.summary}</div>}

                        <div className="field-line">
                            <TextField
                                label="Email"
                                name="email"
                                error={errors.email !== undefined}
                                helperText={errors.email}
                                onChange={onChange}
                                value={user.email}
                                margin="normal"
                            />
                        </div>

                        <div className="field-line">
                            <TextField
                                label="Password"
                                type="password"
                                name="password"
                                onChange={onChange}
                                error={errors.password  !== undefined}
                                helperText={errors.password}
                                value={user.password}
                            />
                        </div>

                        <div className="button-line">
                            <Button type="submit" variant="contained" color="primary">Log in</Button>
                        </div>
                    </form>
            </CardContent>
        </Card>
    );

Login.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
};

export default Login;