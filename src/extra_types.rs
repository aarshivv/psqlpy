use std::str::FromStr;

use pyo3::{pyclass, pymethods, types::PyModule, PyResult, Python};
use uuid::Uuid;

use crate::exceptions::rust_errors::RustPSQLDriverPyResult;

macro_rules! build_python_type {
    ($st_name:ident, $rust_type:ty) => {
        #[pyclass]
        #[derive(Clone)]
        pub struct $st_name {
            inner_value: $rust_type,
        }

        impl $st_name {
            pub fn retrieve_value(&self) -> $rust_type {
                self.inner_value
            }
        }

        #[pymethods]
        impl $st_name {
            #[new]
            pub fn new_class(inner_value: $rust_type) -> Self {
                Self { inner_value }
            }

            pub fn __str__(&self) -> String {
                format!("{}, {}", stringify!($st_name), self.inner_value)
            }
        }
    };
}

build_python_type!(SmallInt, i16);
build_python_type!(Integer, i32);
build_python_type!(BigInt, i64);

#[pyclass]
#[derive(Clone)]
pub struct PyUUID {
    inner: Uuid,
}

impl PyUUID {
    pub fn inner(&self) -> Uuid {
        self.inner
    }
}

#[pymethods]
impl PyUUID {
    #[new]
    pub fn new_uuid(uuid_value: String) -> RustPSQLDriverPyResult<Self> {
        Ok(Self {
            inner: Uuid::from_str(&uuid_value)?,
        })
    }
}

pub fn extra_types_module(_py: Python<'_>, pymod: &PyModule) -> PyResult<()> {
    pymod.add_class::<SmallInt>()?;
    pymod.add_class::<Integer>()?;
    pymod.add_class::<BigInt>()?;
    pymod.add_class::<PyUUID>()?;
    Ok(())
}
