import React, { useState } from "react";
import data from "../assets/gridData.json";
import DataGrid from "devextreme-react/data-grid";
import {
  Column,
  Pager,
  Paging,
  SearchPanel,
  Grouping,
  GroupPanel,
  RowDragging,
} from "devextreme-react/data-grid";
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";

const MyGridData = () => {
  const [rowsData, setRowsData] = useState(data);

  const onReorder = (e) => {
    const visibleRows = e.component.getVisibleRows();
    const sourceData = visibleRows[e.fromIndex].data;
    const targetData = visibleRows[e.toIndex].data;
    const newData = [...rowsData];

    const fromIndex = rowsData.findIndex((row) => row === sourceData);
    const toIndex = rowsData.findIndex((row) => row === targetData);

    newData.splice(fromIndex, 1);
    newData.splice(toIndex, 0, sourceData);

    setRowsData(newData);
  };

  // get all keys for columns

  return (
    <>
      <DataGrid
        dataSource={rowsData}
        showBorder={true}
        allowColumnReordering={true}
        rowAlternationEnabled={true}
        showBorders={true}
      >
        <GroupPanel visible={true} />
        <SearchPanel visible={true} highlightCaseSensitive={true} />
        <Grouping autoExpandAll={false} />

        {/* {rowsData.filter(()) ? console.log(Object.keys(rowsData[0])) : ""} */}

        <Column dataField="ID" caption="Id" alignment="left" width={50} />
        <Column
          dataField="PLANNING_MONTH"
          caption="Planning Month"
          alignment="left"
          width={115}
        />
        <Column dataField="REGION" caption="Region" width={90} groupIndex={0} />
        <Column
          dataField="TERMINAL_ID"
          caption="Terminal ID"
          alignment="left"
          width={90}
        />
        <Column
          dataField="LOCK_NOMINATION"
          caption="Lock Nomination"
          alignment="left"
          width={90}
        />
        <Column
          dataField="NOMINATION_DATE"
          caption="Nomination Date"
          alignment="left"
          width={120}
        />
        <Column
          dataField="OPENING_INVENTORY_PROPANE"
          caption="Opening Inventory Propane"
          alignment="left"
          width={90}
        />
        <Column
          dataField="OPENING_INVENTORY_BUTANE"
          caption="Opening Inventory Butane"
          alignment="left"
          width={90}
        />
        <Column
          dataField="TERMINAL_AVAILS_PROPANE"
          caption="Terminal Avails Propane"
          alignment="left"
          width={90}
        />
        <Column
          dataField="TERMINAL_AVAILS_BUTANE"
          caption="Terminal Avails Butane"
          alignment="left"
          width={90}
        />
        <Column
          dataField="MIN_SAFE_INVENTORY_PROPANE"
          caption="Min. Safe Inventory Propane"
          alignment="left"
          width={90}
        />
        <Column
          dataField="MIN_SAFE_INVENTORY_BUTANE"
          caption="Min. Safe Inventory Butane"
          alignment="left"
          width={90}
        />
        <Column
          dataField="MAX_SAFE_INVENTORY_PROPANE"
          caption="Max. Safe Inventory Propane"
          alignment="left"
          width={90}
        />
        <Column
          dataField="Max_SAFE_INVENTORY_BUTANE"
          caption="Max. Safe Inventory Butane"
          alignment="left"
          width={90}
        />
        <Column
          dataField="CUSTOMER_ID"
          caption="Customer ID"
          alignment="left"
          width={105}
        />
        <Column
          dataField="CUSTOMER_NAME"
          caption="Customer Name"
          alignment="left"
          width={150}
        />
        <Column
          dataField="NOMINATION_TEMP_KEY"
          caption="Nomination Temp Key"
          alignment="left"
          width={70}
        />
        <Column
          dataField="CUSTOMER_LIFTING_PROPANE"
          caption="Propane"
          alignment="left"
          width={70}
        />
        <Column
          dataField="CUSTOMER_LIFTING_BUTANE"
          caption="Butane"
          width={70}
        />
        <Column
          dataField="SCENARIO_PLANNING_VERSION"
          caption="Scenario Planning Version"
          width={70}
        />
        <Column
          dataField="SCENARIO_PLANNING_SUB_VERSION"
          caption="Scenario Planning Sub Version"
          width={70}
        />
        <Column
          dataField="PLAN_CYCLE_CLICK_VERSION"
          caption="Plan Cycle Click Version"
          width={70}
        />
        <Column
          dataField="CHANGED_NOMINATION_DATE"
          caption="Changed Nomination Date"
          width={70}
        />

        <Column dataField="CREATED_BY" caption="Created By" width={70} />
        <Column
          dataField="CREATED_DTTM"
          caption="Created DateTime"
          width={70}
        />
        <Column dataField="UPDATED_BY" caption="Updated By" width={70} />
        <Column
          dataField="UPDATED_DTTM"
          caption="Updated DateTime"
          width={70}
        />
        <Column dataField="BUSINESS_UNIT" caption="Business Unit" width={70} />
        <Column dataField="ROW_COUNT" caption="Row Count" width={70} />
        <Column dataField="ROW_ORDER" caption="Row Order" width={70} />

        <RowDragging allowReordering={true} onReorder={onReorder} />

        <Paging defaultPageSize={10} />
        <Pager
          showPageSizeSelector={true}
          allowedPageSizes={[5, 10, 20]}
          showInfo={true}
        />
      </DataGrid>
    </>
  );
};

export default MyGridData;
