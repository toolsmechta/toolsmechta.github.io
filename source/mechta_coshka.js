/*MIT License*/

//this code was created by me, see.
//this JS script created to facilitate the process of checking price tags based on a storefront (mechta.kz)
//github: github.com/badcast

var db = 'W1si0JLQsNGA0L7Rh9C90LDRjyDQv9C+0LLQtdGA0YXQvdC+0YHRgtGMIiwyLCLQktC10L3RgtC40LvRj9GC0L7RgCIsMywi0JLQtdGA0YLQuNC60LDQu9GM0L3Ri9C5INC/0YvQu9C10YHQvtGBIiwzLCLQktC+0LTQvtC90LDQs9GA0LXQstCw0YLQtdC70YwiLDMsItCS0YHRgtGALiDQv9C+0YHRg9C00L7QvNC+0LXRh9C90LDRjyDQvNCw0YjQuNC90LAiLDMsItCS0YvRgtGP0LbQutCwIiwzLCLQk9Cw0LfQvtCy0LDRjyDQv9C70LjRgtCwIiwzLCLQk9Cw0LfQvtGN0LvQtdC60YLRgNC40YfQtdGB0LrQsNGPINC/0LvQuNGC0LAiLDMsItCU0YPRhdC+0LLQvtC5INGI0LrQsNGEIiwyLCLQmtC+0LzQsdC40L3QuNGA0L7QstCw0L3QvdCw0Y8g0L/Qu9C40YLQsCIsMywi0JrQvtC90LLQtdC60YLQvtGAIiwzLCLQmtC+0L3QtNC40YbQuNC+0L3QtdGAIiwzLCLQmtGD0LvQtdGAINC90LDQv9C+0LvRjNC90YvQuSIsMywi0JrRg9C70LXRgCDQvdCw0YHRgtC+0LvRjNC90YvQuSIsMywi0JzQuNC60YDQvtCy0L7Qu9C90L7QstCw0Y8g0L/QtdGH0YwiLDEsItCc0L7RgNC+0LfQuNC70YzQvdC40LoiLDMsItCc0L7RgNC+0LfQuNC70YzQvdC40Log0LvQsNGA0YwiLDMsItCe0LHQvtCz0YDQtdCy0LDRgtC10LvRjCIsMSwi0J/QvtGB0YPQtNC+0LzQvtC10YfQvdCw0Y8g0LzQsNGI0LjQvdCwIiwzLCLQn9GL0LvQtdGB0L7RgSIsMSwi0KDQvtCx0L7Rgi3Qv9GL0LvQtdGB0L7RgSIsMywi0KHRgtC40YDQsNC70YzQvdCw0Y8g0LzQsNGI0LjQvdCwIiwzLCLQodGC0LjRgNCw0LvRjNC90LDRjyDQvNCw0YjQuNC90LAg0J8v0JAiLDMsItCh0YLQuNGA0LDQu9GM0L3QsNGPINC80LDRiNC40L3QsCDRgSDRgdGD0YjQutC+0LkiLDMsItCi0LXQv9C70L7QstCw0Y8g0L/Rg9GI0LrQsCIsMywi0KLQtdC/0LvQvtCy0LXQvdGC0LjQu9GP0YLQvtGAIiwzLCLQotC10L/Qu9C+0LLQvtC30LTRg9GI0L3QsNGPINC30LDQstC10YHQsCIsMywi0KXQvtC70L7QtNC40LvRjNC90LjQuiIsMywi0KjQutCw0YQg0LLQuNGC0YDQuNC90LAiLDMsItCt0LvQtdC60YLRgNC40YfQtdGB0LrQuNC5INC60LDQvNC40L0iLDMsItCt0LvQtdC60YLRgNC+0L/QtdGH0YwiLDFdLFsi0JHRg9GC0LXRgNCx0YDQvtC00L3QuNGG0LAiLDEsItCS0LXRgdGLIiwxLCLQk9C70LDQtNC40LvRjNC90LDRjyDRgdC40YHRgtC10LzQsCIsMSwi0JbQsNGA0L7QstC90Y8iLDEsItCY0YDRgNC40LPQsNGC0L7RgCIsMCwi0JrQsNC30LDQvSIsMSwi0JrQsNGB0YLRgNGO0LvRjyIsMSwi0JrQvtCy0YgiLDEsItCa0L7RhNC10LLQsNGA0LrQsCIsMSwi0JrQvtGE0LXQvNCw0YjQuNC90LAiLDEsItCa0YPRhdC+0L3QvdCw0Y8g0LzQsNGI0LjQvdCwIiwxLCLQnNCw0L3RgtC+0LLQsNGA0LrQsCIsMSwi0JzQsNGB0YHQsNC20LXRgCIsMSwi0JzQsNGI0LjQvdC60LAg0LTQu9GPINGB0YLRgNC40LbQutC4INC60LDRgtGL0YjQutC+0LIiLDEsItCc0LjQutGB0LXRgCIsMSwi0JzRg9C70YzRgtC40LLQsNGA0LrQsCIsMSwi0JzRg9C70YzRgtC40L/QtdC60LDRgNGMIiwxLCLQnNGP0YHQvtGA0YPQsdC60LAiLDEsItCd0LDQsdC+0YAg0L/QvtGB0YPQtNGLIiwxLCLQndCw0YHRgtC+0LvRjNC90YvQuSDQs9GA0LjQu9GMIiwxLCLQntGC0L/QsNGA0LjQstCw0YLQtdC70Ywg0Y3Qu9C10LrRgtGA0LjRh9C10YHQutC40LkiLDEsItCf0LvQvtC50LrQsCIsMSwi0J/RgNC40LHQvtGAINC00LvRjyDRgNCw0YHQv9GA0Y/QvNC70LXQvdC40Y8g0LLQvtC70L7RgSIsMSwi0KDRg9GH0L3QvtC5INCx0LvQtdC90LTQtdGAIiwxLCLQodC60L7QstC+0YDQvtC00LAgLSDQs9GA0LjQu9GMIiwxLCLQodC60L7QstC+0YDQvtC00LAgKyDQutGA0YvRiNC60LAiLDEsItCh0LrQvtCy0L7RgNC+0LTQsCIsMSwi0KHQvtC60L7QstGL0LbQuNC80LDQu9C60LAiLDEsItCh0YLQsNGG0LjQvtC90LDRgNC90YvQuSDQsdC70LXQvdC00LXRgCIsMSwi0KLQtdGA0LzQvtC/0L7RgiIsMSwi0KLQvtGB0YLQtdGAIiwxLCLQotGA0LjQvNC80LXRgCDQtNC70Y8g0LHQvtGA0L7QtNGLIiwyLCLQotGA0LjQvNC80LXRgCDQtNC70Y8g0LLQvtC70L7RgSIsMiwi0KLRgNC40LzQvNC10YAg0LTQu9GPINC90L7RgdCwIiwyLCLQo9Cy0LvQsNC20L3QuNGC0LXQu9GMINCy0L7Qt9C00YPRhdCwIiwxLCLQo9GC0Y7QsyIsMSwi0KTQtdC9IiwxLCLQpNC10L0g0L/Qu9C+0LnQutCwIiwxLCLQp9Cw0LnQvdC40LoiLDEsItCo0LLQtdC50L3QsNGPINC80LDRiNC40L3QsCIsMSwi0K3Quy4g0LfRg9Cx0L3QsNGPINGJ0ZHRgtC60LAiLDAsItCt0LvQtdC60YLRgNC40YfQtdGB0LrQsNGPINGB0YPRiNC60LAiLDAsItCt0LvQtdC60YLRgNC+0LHRgNC40YLQstCwIiwyLCLQrdC70LXQutGC0YDQvtCy0LDRhNC10LvRjNC90LjRhtCwIiwxLCLQrdC70LXQutGC0YDQvtGH0LDQudC90LjQuiIsMSwi0K3Qu9C10LrRgtGA0L7RidC40L/RhtGLIiwxLCLQrdC/0LjQu9GP0YLQvtGAIiwyXSxbItCg0LXQu9C1INC90LDQv9GA0Y/QttC10L3QuNGPIiwxLCLQmtC+0LLRgNC40Log0LTQu9GPINGF0YDQsNC90LXQvdC40Y8g0L7QstC+0YnQtdC5INC4INGE0YDRg9C60YLQvtCyIiwwLCLQkNC90YLQuNCy0LjQsdGA0LDRhtC40L7QvdC90YvQtSDQu9Cw0L/QutC4IiwwLCLQkdCw0L3QutCwIiwwLCLQkdGD0YLRi9C70LrQsCIsMSwi0KDRg9C60LDQstC40YbQsCIsMCwi0JPQtdC70YwiLDEsItCT0LvQsNC00LjQu9GM0L3QsNGPINC00L7RgdC60LAiLDEsItCU0LXRgNC20LDRgtC10LvRjCDQtNC70Y8g0LzQvtC70L7QutCwIiwwLCLQlNC+0YHQutCwINGA0LDQt9C00LXQu9C+0YfQvdCw0Y8iLDAsItCU0YPRgNGI0LvQsNCzIiwwLCLQgdC80LrQvtGB0YLRjCDQtC/RhdC+0LvQvtC0LiDQuCDQvC/Qv9C10YfQuCIsMCwi0JHRg9GC0YvQu9C60LAg0LTQu9GPINC80LDRgdC70LAiLDAsItCB0LzQutC+0YHRgtGMINC00LvRjyDRgdC/0LXRhtC40LkgIiwwLCLQgdC80LrQvtGB0YLRjCDQtNC70Y8g0YHRi9C/0YPRh9C40YUg0L/RgNC+0LQuIiwwLCLQldC80LrQvtGB0YLRjCDQvNC10YDQvdCw0Y8iLDAsItCX0LDQstCw0YDQvtGH0L3Ri9C5INGH0LDQudC90LjQuiIsMSwi0JjQs9C70YsiLDAsItCY0LPQvtC70YzQvdC40YbQsCIsMCwi0JrQsNGA0LDQvdC00LDRiCDQtNC70Y8g0YPRgtGO0LPQvtCyIiwwLCLQntCy0L7RidC10YfQuNGB0YLQutCwIiwwLCLQmtCw0YHRgtGA0Y7Qu9C4INGB0YLQtdC60LvRj9C90L3Ri9C1IiwxLCLQndCw0LHQvtGAINC60L7QvdGC0LXQudC90LXRgNC+0LIiLDAsItCa0L7QvdC00LjRhtC40L7QvdC10YAg0LTQu9GPINCx0LXQu9GM0Y8iLDEsItCa0L7QvdGC0LXQudC90LXRgCIsMCwi0JrQvtC90YLQtdC50L3QtdGAINC00LvRjyDRgdGC0LjRgNCw0LvRjNC90L7Qs9C+INC/0L7RgNC+0YjQutCwIiwxLCLQmtC+0YDQt9C40L3QsCDQtNC70Y8g0LHQtdC70YzRjyIsMSwi0JrQvtGA0LfQuNC90LrQsCDRg9C90LjQstC10YDRgdCw0LvRjNC90LDRjyIsMCwi0JrQvtGE0LUg0LIg0LfQtdGA0L3QsNGFIiwwLCLQmtC+0YTQtSDQvNC+0LvQvtGC0YvQuSIsMCwi0JrQvtGE0LXQvNC+0LvQutCwIiwxLCLQmtGA0L7QvdGI0YLQtdC50L0g0LTQu9GPINCh0JLQpyIsMCwi0JXQvNC60L7RgdGC0Ywg0LTQu9GPINC80LjQutGB0LXRgNCwIiwwLCLQmtGA0YvRiNC60LAiLDEsItCa0YDRi9GI0LrQsCDQtC/RhdC+0LvQvtC0LiDQuCDQvC/Qv9C10YfQuCIsMCwi0JrRg9Cy0YjQuNC9IiwxLCLQmtGD0LLRiNC40L0g0LzQtdGA0L3Ri9C5IiwwLCLQmtGD0LvQuNC90LDRgNC90YvQuSDRiNC/0YDQuNGGIiwwLCLQmtGD0YXQvtC90L3Ri9C1INCy0LXRgdGLIiwxLCLQmtGD0YXQvtC90L3Ri9C5INC90LDQsdC+0YAiLDEsItCb0L7QttC60LAiLDAsItCb0L7Qv9Cw0YLQutCwIiwwLCLQnNCw0YHQu9GR0L3QutCwIiwwLCLQnNCw0YHQu9C+INC00LvRjyDRiNCy0LXQudC90YvRhSDQvNCw0YjQuNC9IiwwLCLQnNC40YHQutCwIiwwLCLQnNC+0LTRg9C70Ywg0YHQvNC10L3QvdGL0LkiLDEsItCd0LDQsdC+0YAgKNGF0LjQvNC40Y8pIiwwLCLQkdGD0LvQsNCy0LrQuCIsMCwi0J3QsNCx0L7RgCDQstGC0YPQu9C+0LoiLDAsItCo0YLQvtC/0L7RgCIsMCwi0J3QsNCx0L7RgCDQtNC70Y8g0L/QuNC60L3QuNC60LAiLDAsItCd0LDQsdC+0YAg0LTQu9GPINGI0LLQtdC50L3Ri9GFINC80LDRiNC40L0iLDAsItCd0LDQsdC+0YAg0L3QvtC20LXQuSIsMCwi0J3QsNCx0L7RgCDRgNCw0LfQtNC10LvQvtGH0L3Ri9GFINC00L7RgdC+0LoiLDAsItCd0LDRgdCw0LTQutCwICgg0LTQu9GPINGD0YLRjtCz0LApIiwwLCLQndCw0YHQsNC00LrQsCAo0LTQu9GPINGI0LLQsNCx0YDRiykiLDAsItCd0LDRgdCw0LTQutCwINC3L9GJIiwwLCLQndC40YLQutC4IiwwLCLQndC+0LYiLDAsItCd0L7QttC90LjRhtGLIiwwLCLQntC/0L7Qu9Cw0YHQutC40LLQsNGC0LXQu9GMIiwxLCLQntGH0LjRgdGC0LjRgtC10LvRjCDQvdCw0LrQuNC/0LgiLDAsItCf0L7QtNC90L7RgSIsMCwi0J/QvtC00YHRgtCw0LLQutCwINC00LvRjyDQutGD0YXQvtC90L3Ri9GFINC/0YDQuNC90LDQtNC70LXQttC90L7RgdGC0LXQuSIsMCwi0J/QvtC70L7QstC90LjQuiIsMCwi0J/QvtGA0L7RiNC+0LoiLDEsItCk0YDQtdC90Yct0L/RgNC10YHRgSIsMSwi0J/RgNC10YHRgSDQtNC70Y8g0YfQtdGB0L3QvtC60LAiLDAsItCf0YDQvtGC0LjQstC10L3RjCIsMCwi0J/Ri9C70LXRgdCx0L7RgNC90LjQuiIsMCwi0KHQsNC70LDRgtC90LjQuiIsMSwi0KHQsNC70YTQtdGC0LrQsCIsMSwi0KHQtdGC0LrQsCDQtNC70Y8g0LPQu9Cw0LbQtdC90LjRjyIsMCwi0KnQuNC/0YbRiyIsMCwi0KHQuNGC0L4iLDAsItCh0LrQsNC70LrQsCIsMCwi0KHQutGA0LXQsdC+0LoiLDAsItCh0L7Qu9GMIiwxLCLQodGA0LXQtNGB0YLQstC+IiwxLCLQodGA0LXQtNGB0YLQstC+INC00LvRjyDRg9GC0Y7Qs9CwIiwwLCLQodGC0LDQsdC40LvQuNC30LDRgtC+0YDRiyDQkdC10LvQvtC5INGC0LXRhdC90LjQutC4IiwxLCLQodGD0YjQuNC70LrQsCDQtNC70Y8g0LHQtdC70YzRjyIsMSwi0KLQsNCx0LvQtdGC0LrQuCIsMSwi0KLRkdGA0LrQsCIsMSwi0KLQtdGA0LzQvtC60YDRg9C20LrQsCIsMSwi0KLQtdGA0LzQvtGBIiwxLCLQotC+0LvQutGD0YjQutCwIiwwLCLQotC+0L/QvtGA0LjQuiIsMCwi0KLQvtGH0LjQu9C+IiwwLCLQotGD0YDQutCwIiwxLCLQo9C90LjQstC10YDRgdCw0LvRjNC90YvQuSDQsdC+0LrRgSDQtNC70Y8g0YXRgNCw0L3QtdC90LjRjyIsMSwi0KPRgdGC0YDQvtC50YHRgtCy0L4g0LTQu9GPINGB0LzRj9Cz0YfQtdC90LjRjyDQstC+0LTRiyIsMSwi0KTQuNC70YzRgtGAICjQtNC70Y8g0LLRi9GC0Y/QttC60LgpIiwwLCLQpNC40LvRjNGC0YAgKNC00LvRjyDQutC+0YTQtSkiLDEsItCk0LjQu9GM0YLRgCAo0LTQu9GPINC/0YvQu9C10YHQvtGB0LApIiwwLCLQpNC+0YDQvNCwIiwwLCLQpNC+0YDQvNCwINC00LvRjyDQstGL0L/QtdGH0LrQuCIsMCwi0KTQvtGA0LzQsCDQtNC70Y8g0LvRjNC00LAiLDAsItCl0LvQtdCx0L3QuNGG0LAiLDEsItCn0LDRgdGLIiwxLCLQp9Cw0YjQutC4IiwxLCLQp9C10YXQvtC7ICjQtNC70Y8g0LPQu9Cw0LTQuNC70YzQvdGL0YUg0LTQvtGB0L7QuikiLDAsItCo0LLQsNCx0YDQsCIsMCwi0KjQstCw0LHRgNCwLdC/0L7Qu9C+0YLQtdGAIiwzLCLQqNC60LDRgtGD0LvQutCwIiwxLCLQqNGD0LzQvtCy0LrQsCIsMCwi0KnQtdGC0LrQsCIsMCwi0K3Qu9C10LrRgtGA0L7RgdGD0YjQuNC70LrQsCDQtNC70Y8g0L7QsdGD0LLQuCIsMCwi0JLQtdC90YfQuNC6IiwwLCLQndCw0LHQvtGAINGE0L7RgNC8IiwwLCLQn9C+0LPQu9C+0YLQuNGC0LXQu9GMINC30LDQv9Cw0YXQvtCyIiwwXSxbIklQINCa0LDQvNC10YDQsCIsMCwiVVBTIiwxLCJXRUIg0LrQsNC80LXRgNCwIiwwLCLQkNCy0YLQvtC80L7QsdC40LvRjNC90L7QtSDQt9Cw0YAuINGD0YHRgtGA0L7QudGB0YLQstC+IiwwLCLQkNCy0YLQvtC80L7QsdC40LvRjNC90YvQuSDQtNC10YDQttCw0YLQtdC70YwiLDAsItCQ0LTQsNC/0YLQtdGAIERpZ2l0YWwgQVYiLDAsItCQ0LTQsNC/0YLQtdGAINC00LvRjyDRgtC10LvQtdGE0L7QvdCwIiwwLCLQkNC60LrRg9C80YPQu9GP0YLQvtGAIiwwLCLQkNC60YHQtdGB0YHRg9Cw0YAg0LTQu9GPINCx0LDRgdGB0LXQudC90LAiLDMsItCQ0L3RgtC10L3QvdCwIiwzLCLQkNGA0L7QvNCw0YLQuNC30LDRgtC+0YAg0LLQvtC30LTRg9GF0LAiLDAsItCR0LDRgdGB0LXQudC9IiwzLCLQkdCw0YLQsNGA0LXQudC60LAiLDAsItCR0LXRgdC/0YDQvtCy0L7QtNC90L7QuSDQutC+0L3RgtGA0L7Qu9C70LXRgCIsMCwi0JHQtdGB0L/RgNC+0LLQvtC00L3QvtC5INGB0LXRgtC10LLQvtC5IFVTQiDQsNC00LDQv9GC0LXRgCIsMCwi0JHRg9C80LDQs9CwIiwxLCLQktC10LvQvtGB0LjQv9C10LQiLDMsItCS0LjQtNC10L7QuNCz0YDQsCDQtNC70Y8gUFMgNCIsMCwi0JLQuNC00LXQvtC40LPRgNCwINC00LvRjyBQUyA1IiwwLCLQktC40LTQtdC+0YDQtdCz0LjRgdGC0YDQsNGC0L7RgCIsMiwi0JLQvdC10YjQvdC40Lkg0LDQutC60YPQvNGD0LvRj9GC0L7RgCIsMCwi0JLQvdC10YjQvdC40Lkg0L3QsNC60L7Qv9C40YLQtdC70YwgSEREIDIuNSIsMCwi0JLQvdGD0YLRgNC10L3QvdC40Lkg0L3QsNC60L7Qv9C40YLQtdC70YwgU1NEIiwwLCLQk9Cw0YDQvdC40YLRg9GA0LAg0LTQu9GPINCf0JoiLDEsItCT0LjRgNC+0YHQutGD0YLQtdGAIiwxLCLQlNC10YLRgdC60LDRjyDQuNCz0YDRg9GI0LrQsCIsMCwi0JTQtdGC0YHQutC40LUg0YHQvNCw0YDRgiDRh9Cw0YHRiyIsMiwi0JTQtdGC0YHQutC40Lkg0LrQvtC80L/Qu9C10LrRgiIsMywi0JTQvtC8LiDQutC40L3QvtGC0LXQsNGC0YAiLDMsItCX0LDRgNGP0LTQvdC+0LUg0YPRgdGC0YDQvtC50YHRgtCy0L4g0LTQu9GPINGC0LXQu9C10YTQvtC90L7QsiIsMCwi0JfQsNGJ0LjRgtC90LDRjyDQv9C70LXQvdC60LAg0LTQu9GPINC00LjRgdC/0LvQtdGPIiwwLCLQl9Cw0YnQuNGC0L3Ri9C5INC30LDQvNC+0LoiLDAsItCY0LPRgNC+0LLQsNGPINCz0LDRgNC90LjRgtGD0YDQsCIsMCwi0JjQs9GA0L7QstCw0Y8g0L/RgNC40YHRgtCw0LLQutCwIiwwLCLQmNCz0YDQvtCy0L7QtSDQutGA0LXRgdC70L4iLDMsItCa0LDQsdC10LvRjCDQtNC70Y8g0YLQtdC70LXRhNC+0L3QsCIsMCwi0JrQsNGA0YLQsCDQv9Cw0LzRj9GC0LgiLDAsItCa0LDRgNGC0YDQuNC00LYiLDAsItCa0LDRgNGC0YDQuNC00LYg0LTQu9GPINGE0LjQu9GM0YLRgNGD0Y7RidC10LPQviDQvdCw0YHQvtGB0LAiLDAsItCa0LvQsNCy0LjQsNGC0YPRgNCwIiwxLCLQmtC+0LLRgNC40Log0LTQu9GPINC80YvRiNC60LgiLDAsItCa0L7Qu9C+0L3QutC4IiwxLCLQmtC+0LzQv9GM0Y7RgtC10YDQvdCw0Y8g0YHRg9C80LrQsCIsMCwi0JrQvtC80L/RjNGO0YLQtdGA0L3Ri9C5INGB0YLQvtC7IiwyLCLQmtC+0L3RgdGC0YDRg9C60YLQvtGAIiwxLCLQmtGA0L7QvdGI0YLQtdC50L0iLDMsItCa0YDQvtC90YjRgtC10LnQvSDQtNC70Y8g0LzQvtC90LjRgtC+0YDQvtCyIiwxLCLQm9Cw0LzQv9CwIExFRCIsMCwi0JvQsNC80L/QsCDQvdCw0YHRgtC+0LvRjNC90LDRjyIsMSwi0JzQsNGA0YjRgNGD0YLQuNC30LDRgtC+0YAiLDEsItCc0L7QtNC10LwgNEciLDEsItCc0L7QtNC10LwiLDEsItCc0L7QvdC40YLQvtGAIiwxLCLQnNGD0Lcu0YbQtdC90YLRgCIsMywi0JzQpNCjINC70LDQt9C10YDQvdGL0LkiLDEsItCc0KTQoyDRgdGC0YDRg9C50L3Ri9C5IiwxLCLQnNGL0YjQutCwIiwwLCLQnNGL0YjQutCwINC40LPRgNC+0LLQsNGPIiwwLCLQndCw0LHQvtGAINC00LvRjyDRh9C40YHRgtC60Lgg0LHQsNGB0YHQtdC50L3QsCIsMCwi0J3QsNCx0L7RgCDQvNCw0YjQuNC90L7QuiIsMCwi0J3QsNC60L7Qv9C40YLQtdC70YwiLDAsItCd0LDRgdGC0L7Qu9GM0L3QsNGPINC40LPRgNCwIiwwLCLQndCw0YPRiNC90LjQutC4ICsg0LzQuNC60YDQvtGE0L7QvSIsMCwi0J3QsNGD0YjQvdC40LrQuCIsMCwi0J3QsNGD0YjQvdC40LrQuCDQtNC70Y8g0YLQtdC70LXRhNC+0L3QsCBBUFBMRSIsMCwi0J3QsNGD0YjQvdC40LrQuCDQtNC70Y8g0YLQtdC70LXRhNC+0L3QsCIsMCwi0J3QvtGD0YLQsdGD0LoiLDMsItCf0LXRgNGB0L7QvdCw0LvRjNC90YvQuSDQutC+0LzQv9GM0Y7RgtC10YAiLDMsItCf0LvQsNC90YjQtdGCIiwyLCLQn9C70LXQvdC60LAg0LTQu9GPINC80L7QvNC10L3RgtCw0LvRjNC90YvRhSDRgdC90LjQvNC60L7QsiIsMCwi0J/QvtC00YHRgtCw0LLQutCwINC00LvRjyDQvdC+0YPRgtCx0YPQutCwIiwxLCLQn9C+0YDRgtCw0YLQuNCy0L3QsNGPINC60L7Qu9C+0L3QutCwIiwxLCLQn9GA0LjQvdGC0LXRgCDQu9Cw0LfQtdGA0L3Ri9C5IiwxLCLQn9GA0LjQvdGC0LXRgCDRgdGC0YDRg9C50L3Ri9C5IiwxLCLQn9GA0LjRgdGC0LDQstC60LAg0YLQtdC70LXQstC40LfQuNC+0L3QvdCw0Y8iLDAsItCg0LDQtNC40L7QsdGD0LTQuNC70YzQvdC40LoiLDEsItCg0LDQtNC40L7RgtC10LvQtdGE0L7QvSBERUNUIiwxLCLQoNC10LzQvtC90YLQvdGL0Lkg0L3QsNCx0L7RgCDQtNC70Y8g0LHQsNGB0YHQtdC50L3QsCIsMCwi0KDRg9GH0L3QvtC5INC40L3RgdGC0YDRg9C80LXQvdGCIiwxLCLQoNGO0LrQt9Cw0Log0LTQu9GPINC90L7Rg9GC0LHRg9C60LAiLDAsItCh0LXRgtC10LLQvtC5INGE0LjQu9GM0YLRgCIsMCwi0KHQuNC90YLQtdC30LDRgtC+0YAiLDEsItCh0LrRgNC10LHQvtC6INC00LvRjyDQsNCy0YLQvtC80LDRiNC40L0iLDAsItCh0LzQsNGA0YIg0YfQsNGB0YsiLDIsItCh0LzQsNGA0YIt0YfQsNGB0YsiLDIsItCh0YLQsNCx0LjQu9C40LfQsNGC0L7RgCIsMSwi0KLQtdC70LXQstC40LfQvtGAIExFRCIsMywi0KLQtdC70LXQstC40LfQvtGAIiwzLCLQotC10LvQtdGE0L7QvSIsMiwi0KLQtdC70LXRhNC+0L0g0YHQvtGC0L7QstGL0LkiLDIsItCi0YPQvNCx0LAiLDMsItCj0LTQu9C40L3QuNGC0LXQu9GMIiwwLCLQo9C80L3QsNGPINC70LDQvNC/0L7Rh9C60LAiLDEsItCj0YHQuNC70LjRgtC10LvRjCDQsdC10YHQv9GA0L7QstC+0LTQvdC+0LPQviDRgdC40LPQvdCw0LvQsCIsMSwi0KTQuNC70YzRgtGA0YPRjtGJ0LjQuSDQvdCw0YHQvtGBINC00LvRjyDQsdCw0YHRgdC10LnQvdC+0LIiLDIsItCk0LjRgtC90LXRgSDQsdGA0LDRgdC70LXRgiIsMiwi0KTQvtGC0L7QsNC/0L/QsNGA0LDRgiDQutC+0LzQv9Cw0LrRgtC90YvQuSIsMiwi0KTQvtGC0L7QsdGD0LzQsNCz0LAiLDEsItCl0LjQvNC40Y8g0LTQu9GPINC+0LHRgNCw0LHQvtGC0LrQuCDQstC+0LTRiyDQsiDQsdCw0YHRgdC10LnQvdC1IiwwLCLQp9C10YXQvtC7INC00LvRjyDQv9C70LDQvdGI0LXRgtCwIiwwLCLQp9C10YXQvtC7INC00LvRjyDRgtC10LvQtdGE0L7QvdCwIiwwLCLQqNC90YPRgCIsMCwi0KjQvdGD0YAg0KfQoiIsMCwi0K3Qu9C10LrRgtGA0L7QuNC90YHRgtGA0YPQvNC10L3RgiIsMCwi0K3Qu9C10LrRgtGA0L7QvdC90LDRjyDQutC90LjQs9CwIiwwLCLQrdC70LXQutGC0YDQvi3RgdCw0LzQvtC60LDRgiIsM11d';

const lwidth = 3;
const lang = [{
    lang: "ru"
}, {
    lang: "kz"
}
];
const sizes = ["МБО", "#4caf50", "28x33",
    "70x42", "#55aaff", "70x42",
    "105x75", "#ffc107", "105x75",
    "A6", "#ff5100", "148x105"];
const categories = [{
    "short": "КБТ",
    "full": "Крупнобытовая техника"
}, {
    "short": "МБТ",
    "full": "Мелкобытовая техника"
}, {
    "short": "СОП",
    "full": "Сопутствующие товары КБТ + МБТ"
}, {
    "short": "GSM",
    "full": "Цифра и ТВ"
}, {
    "short": "Неизвестный",
    "full": "Не зарегистрированным"
}
];
const unknown_category = categories.length - 1;
const types_unknown = "-";

function get_cc_from(size) {
    switch (size) {
        case "148x105": return 0;
        case "105x75": return 1;
        case "70x42": return 2;
        case "28x33": return 3;
    }
    return unknown_category;
}

function map(x, in_min, in_max, out_min, out_max) {
    return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

function div(x, y) {
    return {
        quot: Math.floor(x / y),
        rem: Math.floor(x % y)
    };
}
//Convert string to NUMBER (ignore any case)
function evaluate_number(e) {
    let l = "";
    for (let t = 0; t < e.length; ++t)
        e[t] >= "0" && e[t] <= "9" && (l += e[t]);
    return parseInt(l, 10)
}
//Convert number 123456789 to beautiful 123 456 789
function translate_to_number(num, _level = 3, space = " ") {
    const radix = 10;
    let result = "";
    let level = 1;

    let dv = div(0, 1);
    while ((num = (dv = div(num, radix)).quot)) {
        result = dv.rem + result;

        if (level % _level == 0)
            result = space + result;
        ++level;
    }
    result = dv.rem + result;
    return result;
}
function get_radix_n(num, a) {
    let q;
    a = Math.pow(10, a);

    //let p = Math.round(num / a);
    q = num % a;

    if (num < a / 10)
        q = 0;

    return q;
}

//print MBT-DD.MM.YYYY{-,.}HH.MM.html
function name_analyze(target) {
    const _types = ["kbt", "mbt", "sop", "gsm"];
    const _format = ".html";
    const ERR_MSG = ["", "Неизвестный тип отдела", "Некорректно определена дата", "Некорректно определена время", "Некорректно определена формат файла", "Поврежденный формат"];
    const ERR = {
        ER_OFF: 0,
        ER_TYPE_INVALID: 1,
        ER_DATE_INVALID: 2,
        ER_TIME_INVALID: 3,
        ER_EXT_INVALID: 4,
        ER_TRY: 5
    };
    const _validChars = ['-', '.', ' '];
    const _date_uniform = [31, 12, 9999, 23, 59];
    var _dates = [],
        x, y, z, w,
        err = ERR.ER_OFF;

    function valid_char(lhs) { let x; for (x = 0; _validChars[x] != lhs && x < _validChars.length; ++x); return x < _validChars.length; }

    const __tests = [
        //1 test format
        function () {
            return target.endsWith(_format) ? ERR.ER_OFF : ERR.ER_EXT_INVALID;
        },
        //2 test type
        function () {
            //1. get type from VALUE
            for (w = 0, z = null; w < _types.length; ++w) {
                if (_types[w][0] == target[0]) {
                    z = w;
                    break;
                }
            }
            if (z == null) {
                return ERR.ER_TYPE_INVALID;
            }
            for (x = 0, y = Math.min(_types[0].length, target.length); x < y; ++x) {
                if (target[x] != _types[z][x]) {
                    return ERR.ER_TYPE_INVALID;
                }
            }
            if (target[x] == _validChars[0])
                ++x;
            else
                return ERR.ER_DATE_INVALID;
            return ERR.ER_OFF;
        },
        //3 test date
        function () {
            let time_flag = false;
            for (y = x, w = 0; y < target.length; ++y) {
                if (target[y] == _validChars[1] || !time_flag && valid_char(target[y]) && (time_flag = true)) {
                    let iconv = parseInt(target.substr(x, y - x), 10);
                    if (isNaN(iconv) || iconv > _date_uniform[_dates.length]) {
                        return _dates.length > 3 ? ERR.ER_TIME_INVALID : ERR.ER_DATE_INVALID;
                    }
                    x = ++y;
                    _dates.push(iconv);
                }
            }
            return (_dates.length != _date_uniform.length ? ERR.ER_DATE_INVALID : ERR.ER_OFF);
        }
    ];

    //convert data to lower case
    target = target.toLowerCase();

    let _t = 0;
    // do test's
    do {
        try {
            err = __tests[_t](); // run test
        }
        catch {
            err = ERR.ER_TRY;
        }
    } while (!err && ++_t < __tests.length);

    //3. combine
    let date = null;
    let err_msg = ERR_MSG[err];

    if (err == ERR.ER_OFF) {
        //build date
        date = new Date(_dates[2], _dates[1], _dates[0], _dates[3], _dates[4]);
    }

    return {
        target: target,
        type: z,
        type_name: _types[z],
        error_message: err_msg,
        error: err,
        converts: _dates,
        date: date
    };
}

function stat(jsonResult) {
    /*
    JsonResult impl:
    addedNew    : array (added)
    changed     : array (changed existing list)
    prevRemoved : array (deleted from previous list)
     */
    const benefits_width = 5;
    const benefits_section = [//head .section
        90, 00, 70, 30, 10, //write GSM .section
        0.8, 0.98, 1.96, 2.94, 0.02, //write KBT .section
        0.8, 1.6, 3.2, 4.8, 0.02, //write MBT .section
        1.9, 3.8, 7.6, 11.4, 0.02, //write other (SOP) .section
        4];
    function benefit_get(coshRad) {
        //formula: x * height + y;
        let x = benefits_section.slice(0, benefits_width).indexOf(coshRad);
        if (x == -1) {
            x = benefits_section[benefits_section.length - 1];
            // get last element
        }
        return x;

    }
    if (jsonResult == null) {
        console.error("jsonResult is null");
        return jsonResult;
    }

    //evaluate stats
    let stats = new Array(jsonResult.changed.length);
    for (let x = 0; x < stats.length; ++x) {
        let el = jsonResult.changed[x];
        let coshRad = get_radix_n(el.cosh, 2);
        stats[x] = {
            type: indexof_size(el.type).category,
            oldCosh: el.oldCosh,
            cosh: el.cosh,
            lastOf: coshRad,
            ratio: benefit_get(el.cosh),
            oldLastOf: get_radix_n(el.oldCosh, 2),
            oldRatio: benefit_get(el.oldCosh)
        };

    }

    return stats;

}
function utf8_to_b64(str) {
    return window.btoa(unescape(encodeURIComponent(str)));
}

function b64_to_utf8(str) {
    return decodeURIComponent(escape(window.atob(str)));
}

function convertToBin(json) {
    return utf8_to_b64(JSON.stringify(json));
}

function indexof_size(type) {
    let sz,
        sz_mm,
        cat,
        cl,
        x;
    if (typeof (db) == 'string') {
        //convert data from raw 
        db = JSON.parse(b64_to_utf8(db));
        cat = 0;
        do {
            let _conv = new Map();
            let _link = db[cat];
            let _size = _link.length / 2;
            for (let x = 0; x < _size; ++x) {
                _conv.set(_link[x * 2], _link[x * 2 + 1]);
            }
            db[cat] = _conv; // replace a given
        } while (++cat < db.length);
    }

    for (cat = 0; cat < db.length;) {
        if ((x = db[cat].get(type)) != undefined)
            break;
        ++cat
    }

    if (x != undefined && typeof (x) == "number") {
        // x * width + y = формула двухмерной индексаций (преобразует двумерную точку в одномерную)
        sz = sizes[x * lwidth];
        cl = sizes[x * lwidth + 1];
        sz_mm = sizes[x * lwidth + 2];
    } else {
        sz = types_unknown;
        cl = "#ff04c0";
        // default size 1x1 mm
        sz_mm = "1x1";
    }

    return {
        size: sz,
        color: cl,
        size_mm: sz_mm,
        category: cat // get category
    };
}
function calcPaper(target, count = 1, paper = {
    width: 210,
    // mm maximum
    height: 297,
    // mm maximum
    offLeft: 25,
    // offset left
    offRight: 18,
    // offset right
    offUp: 0,
    // offset up
    offDown: 100,
    // offset down
    valueInISO: "mm",
    name: "A4"
}) {
    let spaceX = paper.width - paper.offLeft - paper.offRight;
    let spaceY = paper.height - paper.offUp - paper.offDown;

    let size = target.replaceAll(" ", "").split("x");
    //convert string to int
    for (let i = 0; i < size.length; ++i)
        size[i] = parseInt(size[i], 10);

    // size Xmm * Ymm
    let _spaceBlock = {
        h: div(spaceX, size[0]),
        v: div(spaceY, size[1])
    };

    _spaceBlock.h = _spaceBlock.h.quot + (_spaceBlock.h.rem > 0 ? 1 : 0);
    _spaceBlock.v = _spaceBlock.v.quot + (_spaceBlock.v.rem > 0 ? 1 : 0);

    return {
        papers: Math.ceil(count / (_spaceBlock.h * _spaceBlock.v)),
        paper: paper,
        target: target,
        toHzMax: _spaceBlock.h,
        toVcMax: _spaceBlock.v,
        valueInISO: paper.valueInISO
    };

}
function find_class_heuristic(docObject = document) {
    let e,
        l = [null, null],
        t = docObject.head.innerHTML;
    function n(e) {
        let l;
        e = (e = (e = (e = e.trimStart()).substr(0, e.indexOf("{"))).trimEnd()).split(" ");
        for (let t = 0; t < e.length; ++t)
            l = e[t],
                e[t] = l.substr(l.indexOf(".") + 1, l.length);
        return {
            class: e[1],
            coshedClass: e[0]
        }
    }
    2495 != t.length && console.error("Changed cosh-class. Please check for validate.");
    var s = t.split("\n");
    for (let t = 0; t < s.length; ++t) {
        let o;
        if (null != l[0] || -1 == (o = s[t].indexOf("color: #e61771; text-align: center;")))
            if (null != l[1] || -1 == (o = s[t].indexOf(" background-color: #ffed00; ")));
            else {
                if (o = n(s[t]),
                    null == e)
                    e = o.coshedClass;
                else if (e != o.coshedClass) {
                    console.error("invalid cosh class");
                    break
                }
                l[1] = o.class
            }
        else {
            if (o = n(s[t]),
                null == e)
                e = o.coshedClass;
            else if (e != o.coshedClass) {
                console.error("invalid cosh class");
                break
            }
            l[0] = o.class
        }
    }
    return {
        discount_class: l[1],
        count_class: l[0],
        cosh_class: e
    }
}
function avail(e = !0, docObject = document) {
    let l, _compare = [null, null],
        t,
        naming_list = docObject.getElementsByClassName("R2C1"),
        typing_list = docObject.getElementsByClassName("R1C1"),
        coshClass;
    if (e) {
        let e = find_class_heuristic(docObject);
        _compare[0] = e.discount_class;
        _compare[1] = e.count_class;
        coshClass = e.cosh_class;
        console.log("discount class: " + _compare[0] + ", count class: " + _compare[1] + " cosh class: " + coshClass);
    } else {
        console.error("failing find classes. Break point");
        return null;
    }

    let classes_list = docObject.getElementsByClassName(coshClass);

    let _results = [];
    for (let e = 0; e < classes_list.length; ++e) {
        let c = classes_list[e].childNodes;
        for (let e = 0; e < c.length; ++e) {
            let a = c[e];
            for (let x = 0; x < _compare.length; ++x) {
                if (a.className != null && a.className == _compare[x]) {
                    _results.push({
                        type: typing_list[_results.length].innerText,
                        name: naming_list[_results.length].innerText,
                        isDiscount: !x,
                        cosh: evaluate_number(a.lastChild.innerText)
                    });
                }
            }
        }
    }
    return _results
}
function difference(prev, next) {
    let _changedList = [],
        _addedList = [],
        _previuousList = [];
    for (let n = 0; n < prev.length; ++n) {
        let o = !1,
            r = !1;
        for (let s = 0; next.length > s; ++s) {
            let c = prev[n].name === next[s].name && prev[n].type === next[s].type;
            if (!o && c && (r = !0,
                prev[n].cosh != next[s].cosh || prev[n].isDiscount != next[s].isDiscount)) {
                next[s].oldCosh = prev[n].cosh;
                next[s].oldIsDiscount = prev[n].isDiscount;
                _changedList.push(next[s]),
                    o = !0;
                break
            }
        }
        r || _previuousList.push(prev[n])
    }
    for (let t = 0; t < next.length; ++t) {
        let s = !1;
        for (let n = 0; n < prev.length; ++n) {
            if (prev[n].name === next[t].name && prev[n].type === next[t].type) {
                s = !0;
                break
            }
        }
        s || _addedList.push(next[t])
    }
    let obj = {
        changed: _changedList,
        addedNew: _addedList,
        prevRemoved: _previuousList
    };
    //calc stats
    obj.stats = stat(obj);

    return obj;
}
//print calc all budget from elements
function budget(e) {
    let l = 0;
    for (let t = l; t < e.length; ++t)
        l += e[t].cosh;
    return l
}
//categorize a width element
function cat(lhs, rhsWith) {
    let arr = [];

    lhs.forEach(function (a, b, c) {
        let i = rhsWith.indexOf(a);
        let size = 0;
        if (i != ~0)
            size = rhsWith[i + 1];
        arr.push(a, size);
        // get size
    });

    return arr;
}
//print all coshes from elements
function print_coshes(e) {
    var l = "";
    for (let t = 0; t < e.length; ++t)
        l += e[t].type + " " + e[t].name + "\n";
    return l
}
//print all types from elements
function print_types(e) {
    let l = new Set();
    e = e ?? avail();

    for (let t = 0; t < e.length; ++t)
        l.add(e[t].type);
    return console.log(l.toString().replaceAll(",", ";")),
        l
}
