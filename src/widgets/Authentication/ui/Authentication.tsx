import { classNames } from '@/shared/lib/classNames/classNames';
import { AuthByEmail, RegByEmail } from '@/features/Auth';
import { useEffect, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import cls from './Authentication.module.scss';

interface AuthenticationProps {
    className?: string;
}

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

const CustomTabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            {children}
          </Box>
        )}
      </div>
    );
}

export const Authentication = (props: AuthenticationProps) => {
    const [activeTab, setActiveTab] = useState(0);
    const { className } = props;

    const a11yProps = (index: number) => {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    const handleChange = (event: React.SyntheticEvent, newActiveTab: number) => {
        setActiveTab(newActiveTab);
    };

    return (
        <Box className={classNames(cls.AuthBox, {}, [className])}>
            <Box>
                <Tabs value={activeTab} onChange={handleChange} aria-label="registration tabs" centered>
                    <Tab label="Авторизация" {...a11yProps(0)} />
                    <Tab label="Регистрация" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={activeTab} index={0}>
                <AuthByEmail />
            </CustomTabPanel>
            <CustomTabPanel value={activeTab} index={1}>
                <RegByEmail />
            </CustomTabPanel>
        </Box>
    );
};