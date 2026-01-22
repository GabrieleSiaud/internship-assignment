--
-- PostgreSQL database dump
--

\restrict vmybbhYuTpz7ie5Lyd0QYa12EVpKHLJadi6bAfH0tXKa51jfGSoVdlEGitJIMaa

-- Dumped from database version 17.6
-- Dumped by pg_dump version 17.6

-- Started on 2026-01-22 16:25:49

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 218 (class 1259 OID 33464)
-- Name: games; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.games (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    image_url text,
    price numeric(10,2),
    discount integer DEFAULT 0,
    likes integer DEFAULT 0,
    place character varying(255),
    platform character varying(100),
    image character varying(500)
);


ALTER TABLE public.games OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 33463)
-- Name: games_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.games_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.games_id_seq OWNER TO postgres;

--
-- TOC entry 4899 (class 0 OID 0)
-- Dependencies: 217
-- Name: games_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.games_id_seq OWNED BY public.games.id;


--
-- TOC entry 4742 (class 2604 OID 33467)
-- Name: games id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.games ALTER COLUMN id SET DEFAULT nextval('public.games_id_seq'::regclass);


--
-- TOC entry 4893 (class 0 OID 33464)
-- Dependencies: 218
-- Data for Name: games; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.games (id, title, image_url, price, discount, likes, place, platform, image) FROM stdin;
2	Red Dead Redemption 2	https://imgproxy.eneba.games/iuhaURlEpTDYsM1X6uEI6o9dZahoID4JnAx1kyj-v9U/rs:fit:300/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9o/OEZLcDZuM2xvRUot/RXY0aHM1RXRDREJ0/QTR5VkZKVEdFdHRp/bTBob3cwLmpwZWc	59.99	80	542	GLOBAL	Rockstar Games Launcher	https://images.seeklogo.com/logo-png/11/2/rockstar-games-logo-png_seeklogo-119326.png
1	FIFA 23	https://imgproxy.eneba.games/XtwW9-cabFJ7OCJwqXhqtDPamOPOF5fF4aK_odWjB3s/rs:fit:300/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy8z/U29yOWt3eExGZDVL/Nmx5QWJ0RGVmd2tG/MmRPbnBkRVd3bWJY/UGxhMEhnLmpwZw	89.99	70	1830	GLOBAL	Xbox Live	https://www.freepnglogos.com/uploads/xbox-logo-green-png-0.png
3	Split Fiction	https://imgproxy.eneba.games/gzjBe4m8P8-w1I37Drd8icqKBCzbOK9vmaBtwzBPFxA/rs:fit:300/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9z/cHNhQjAwRmRUOHJK/dW9uVGhGXzN5dksz/cjBuUWhDY0IwX2lB/VDh4Q25NLmpwZw	49.99	30	601	EUROPA	Xbox Live	https://www.freepnglogos.com/uploads/xbox-logo-green-png-0.png
4	Minecraft	https://imgproxy.eneba.games/xlbf5VpwMdfFult6X_0E7DPaewitogBWBqFqpP03m8k/rs:fit:300/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9E/YmR4N2loekprNDhi/QVNpX0cwakhFZ3gy/b2JmR1lFX3ROeVdz/anRKNGE0LnBuZw	29.99	55	94390	GLOBAL	Windows Store	https://store-images.s-microsoft.com/image/apps.22118.9007199266252480.94f4e265-68d4-4ddc-a67b-b29c8d3021c8.b7a74ad0-b289-4f03-9d22-25f77151ffa1
5	Grand Theft Auto V: Premium Online Edition Rockstar	https://imgproxy.eneba.games/rhP7BmkZSobQeR7mboNBYlH67bBtK_LhuB8cIvW1E4A/rs:fit:300/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9O/S3FOdDNGczlvbkNo/YlBoZlRaR1lCbVB1/ZGNhMjlGV0ZuNHlZ/NmJ3UkNZLmpwZWc	29.99	68	138350	GLOBAL	Rockstar Games Launcher	https://images.seeklogo.com/logo-png/11/2/rockstar-games-logo-png_seeklogo-119326.png
6	Terraria Steam Gift	https://imgproxy.eneba.games/k-CmN6xsGZp-RnZ8ekLRVDpJ7MYaC7XiQiVml4UugVA/rs:fit:300/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9V/X1pHTWZpM1JGcmZn/T2x1VnBUbGxNYlFG/Nm55YkZhaWJubl9W/MFB2ZGpVLmpwZw	1.97	0	480	GLOBAL	Steam Gift	https://static.vecteezy.com/system/resources/previews/020/975/553/non_2x/steam-logo-steam-icon-transparent-free-png.png
\.


--
-- TOC entry 4900 (class 0 OID 0)
-- Dependencies: 217
-- Name: games_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.games_id_seq', 6, true);


--
-- TOC entry 4746 (class 2606 OID 33473)
-- Name: games games_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.games
    ADD CONSTRAINT games_pkey PRIMARY KEY (id);


-- Completed on 2026-01-22 16:25:49

--
-- PostgreSQL database dump complete
--

\unrestrict vmybbhYuTpz7ie5Lyd0QYa12EVpKHLJadi6bAfH0tXKa51jfGSoVdlEGitJIMaa

